
function TodoItem2()
{
  let todoName = "Project"
  let todoDate = "07/08/2024"

  return <div class='container'>
              <div class='row kg-row'>
                  
                  <div class='col-6'>
                      {todoName}
                  </div>
                  <div class='col-4'>
                      {todoDate}
                  </div>
                  <div class='col-2'>
                      <button class='btn btn-danger kg-button'>Delete</button>
                  </div>
              </div>
           </div>
}

export default TodoItem2