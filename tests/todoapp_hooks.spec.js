import TodoPage from '../Pages/todoPage.js.js';
import { test } from '@playwright/test';

// Creating page object without using fixtures
let todoPage;
test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
})

test('Should be able to create a todo-copy', async () => {
    await todoPage.assertCountOfTodos(2);
    await todoPage.typeNewTodo("Take a nap");
    await todoPage.assertCountOfTodos(3);
})

test('Should be able to delete a todo-copy', async () => {
    await todoPage.deleteTodo("Pay electric bill");
    await todoPage.assertCountOfTodos(1);
})

test("Should be able to mark a todo as completed-copy", async () => {
    await todoPage.markTodoCompleted("Pay electric bill");
    await todoPage.assertPresenceOfTodoInList("Pay electric bill")
    await todoPage.gotoCompletedTab()
    await todoPage.assertPresenceOfTodoInList("Pay electric bill")
})
