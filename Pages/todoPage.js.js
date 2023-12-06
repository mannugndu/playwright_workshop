import { expect } from "@playwright/test";
export default class TodoPage {
    constructor(page) {
        this.page = page;
        this.locators = {
            todoWrapper: '.todo-list',
            newTodoInput: '[data-test="new-todo"]'
        }
    }
    url = 'https://example.cypress.io/todo';

    /********************************************
     *************  Action methods **************
     ********************************************/
    async typeNewTodo(todoText) {
        const newTodoTextField = await this.page.locator(this.locators.newTodoInput);
        await newTodoTextField.type(todoText, { delay: 100 });
        await newTodoTextField.press('Enter')

        return this;
    }

    async deleteTodo(todoText) {
        const todoToBeDeleted = this.page.locator('li').filter({ hasText: todoText })
        await todoToBeDeleted.hover();
        await expect(todoToBeDeleted).toBeEnabled();
        await expect(todoToBeDeleted).toBeVisible();
        await todoToBeDeleted.getByRole('button').click()
    }

    async markTodoCompleted(todoText){
        const todoToComplete = this.page.locator('li').filter({ hasText: todoText })
        await expect(todoToComplete).not.toHaveClass('completed')
        await todoToComplete.locator('input[type="checkbox"]').check();
        await expect(todoToComplete).toHaveClass('completed')
    }

    async goto() {
        await this.page.goto(this.url);
        return this;
    }

    async gotoCompletedTab(){
        const completedLink = this.page.getByRole('link', { name: 'Completed' });
        const allLink = this.page.getByRole('link', { name: 'All' });
        await expect(completedLink).not.toHaveClass('selected')
        await expect(allLink).toHaveClass('selected')
        await completedLink.click();
        await expect(completedLink).toHaveClass('selected')
        await expect(allLink).not.toHaveClass('selected')
    }

    /********************************************
    ************  Assertion methods *************
    *********************************************/
    async assertTodoListIsEmpty() {
        await expect(this.page.locator(this.locators.todoWrapper)).toHaveCount(0);
    }

    async assertCountOfTodos(count) {
        const allTodos = await this.page.locator(this.locators.todoWrapper).locator('li');
        await expect(allTodos).toHaveCount(count);
    }

    async assertPresenceOfTodoInList(todoText){
        const todoWrapper = this.page.locator(this.locators.todoWrapper);
        await expect(todoWrapper).toContainText(todoText)
    }

}