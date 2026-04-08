import { expect, test } from '@playwright/test';

test('loads the start page', async ({ page }) => {
	await page.goto('.');

	await expect(
		page.getByRole('heading', { name: 'Документация TrustedWidget в новом React shell' })
	).toBeVisible();
	await expect(page.getByText('Документация разбита на три маршрута')).toBeVisible();
	await expect(page.getByTestId('code-block').first()).toBeVisible();
});

test('navigates to configuration page and renders docs tables', async ({ page }) => {
	await page.goto('.');
	await page.getByRole('link', { name: 'Конфигурация' }).first().click();

	await expect(page).toHaveURL(/\/configuration$/);
	await expect(page.getByRole('heading', { name: 'Параметры TrustedWidget и прикладные примеры' })).toBeVisible();
	await expect(
		page.getByRole('table', {
			name: 'Обязательные параметры TrustedWidgetConfig',
			exact: true
		})
	).toBeVisible();
	await expect(page.getByTestId('code-block').first()).toBeVisible();
});

test('opens styling route directly', async ({ page }) => {
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
