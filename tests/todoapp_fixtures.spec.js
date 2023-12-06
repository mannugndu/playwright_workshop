import TodoPage from '../Pages/todoPage.js.js';

// Creating beforeEach hook using fixtures
const base = require('@playwright/test');
const test = base.test.extend({
    todoPage: async ({page}, use)=>{
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await use(todoPage);
    }
});

test('Should be able to create a todo', async ({todoPage}) => {
    await todoPage.assertCountOfTodos(2);
    await todoPage.typeNewTodo("Take a nap");
    await todoPage.assertCountOfTodos(3);
})

test('Should be able to delete a todo', async ({todoPage}) => {
    await todoPage.deleteTodo("Pay electric bill");
    await todoPage.assertCountOfTodos(1);
})

test("Should be able to mark a todo as completed", async ({todoPage}) => {
    await todoPage.markTodoCompleted("Pay electric bill");
    await todoPage.assertPresenceOfTodoInList("Pay electric bill")
    await todoPage.gotoCompletedTab()
    await todoPage.assertPresenceOfTodoInList("Pay electric bill")
})