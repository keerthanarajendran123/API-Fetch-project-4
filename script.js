async function foo(){
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await res.json();
    console.log(result);
    
    const header = document.createElement("h4");
    header.textContent = "User Data";
    document.body.append(header);
    
    for (var i = 0; i < 16; i++) {
      console.log(result[0])
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text"><b><i>Name: ${result[0].name}</i></b></p>
              <p class="card-text"><b><i>Email: ${result[0].email}</b></p>
              <p class="card-text"><b><i>Street: ${result[0].address.result}</i></b></p>
              <p class="card-text"><b><i>City: ${result[0].address.city}</i></b></p>
            </div>
          </div>
        </div>
        </div>`;
      document.body.append(div);
    }
  }
  catch (error) {
    console.log(error)
  }
}
foo();
