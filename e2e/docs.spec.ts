import { expect, test } from '@playwright/test';

test('loads the start hub and shows two start scenarios', async ({ page }) => {
	await page.goto('.');

	await expect(page.getByRole('heading', { name: 'Выберите стартовый сценарий для TrustedWidget' })).toBeVisible();
	await expect(page.getByRole('link', { name: /Старт для frontend/i }).first()).toBeVisible();
	await expect(page.getByRole('link', { name: /Старт для backend/i }).first()).toBeVisible();
});

test('opens frontend start and shows full integration content', async ({ page }) => {
	await page.goto('frontend-start');

	await expect(page).toHaveURL(/\/frontend-start$/);
	await expect(
		page.getByRole('heading', { name: 'Полная интеграция Trusted Widget между frontend и backend' })
	).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Синхронизация token с backend' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Запрос профиля в SSO' })).toBeVisible();
	await expect(page.getByTestId('code-block').first()).toBeVisible();
});

test('opens backend start and shows oid-client scenario', async ({ page }) => {
	await page.goto('backend-start');

	await expect(page).toHaveURL(/\/backend-start$/);
	await expect(page.getByRole('heading', { name: 'Упрощённый сценарий через oid-client' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Базовая настройка oid-client' })).toBeVisible();
	await expect(page.getByTestId('code-block').first()).toBeVisible();
});

test('keeps configuration route working', async ({ page }) => {
	await page.goto('configuration');

	await expect(page).toHaveURL(/\/configuration$/);
	await expect(page.getByRole('heading', { name: 'Параметры TrustedWidget и прикладные примеры' })).toBeVisible();
	await expect(
		page.getByRole('table', {
			name: 'Обязательные параметры TrustedWidgetConfig',
			exact: true
		})
	).toBeVisible();
});

test('keeps styling route working', async ({ page }) => {
	await page.goto('styling-and-integration');

	await expect(page).toHaveURL(/\/styling-and-integration$/);
	await expect(
		page.getByRole('heading', { name: 'customStyles, SSO-параметры и практические примеры' })
	).toBeVisible();
	await expect(
		page.getByRole('table', { name: 'Структура customStyles', exact: true })
	).toBeVisible();
	await expect(page.getByRole('heading', { name: 'redirect_uris' })).toBeVisible();
});
