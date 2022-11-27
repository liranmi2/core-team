module.exports = `
<style>*{
    margin: 0;
    padding: 0;
}
body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Varela Round', sans-serif;
    font-size: 14px;
    
}

.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
   width: auto;
    background: #fff;
    padding: 20px 25px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(50, 41, 41, 0.05);
}
.table-title {        
    padding-bottom: 15px;
    background: #435d7d;
    color: #fff;
    padding: 16px 30px;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}
.table-title .btn-group {
    float: right;
}
.table-title .btn {
    color: #fff;
    float: right;
    font-size: 13px;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}
.clearfix{
    margin-left: 50px;
    
}
.clearfix a {
    display: block;
    width: auto;
    text-decoration: none;
    text-align: center;
}
.clearfix a button{
    width: 100px;
    color: #fff;
    float: left;
    font-weight: 300;
    font-size: 14px;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn span {
    float: left;
    margin-top: 2px;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
    text-align: center;
   
}

#td-id-3{
    padding: 12px 15px;
    font-size: 11.5px;
}
table.table tr th:first-child {
    width: 60px;
}
table.table tr th:last-child {
    width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
    cursor: pointer;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}	
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
    outline: none !important;
}
/*
tr:hover { 
    background: red; 
 }
 td a { 
    display: block; 
    border: 1px solid black;
    padding: 16px; 
 }
 */
table.table td span .text-success{
    font-size: 30px;
    display: block;
}
table.table td a:hover {
    color: #2196F3;
}
table.table td a.edit {
    color: #FFC107;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}
table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
}
.status {
    font-size: 30px;
    margin: 2px 2px 0 0;
    display: inline-block;
    vertical-align: middle;
    line-height: 10px;
}
.text-success {
    color: #10c469;
}
.text-info {
    color: #62c9e8;
}
.text-warning {
    color: #FFC107;
}
.text-danger {
    color: #ff5b5b;
}
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    width: auto;
    padding: 0 6px;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
    background: #03A9F4;
}
.pagination li.active a:hover {        
    background: #0397d6;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}    
/* Custom checkbox */
.custom-checkbox {
    position: relative;
}
.custom-checkbox input[type="checkbox"] {    
    opacity: 0;
    position: absolute;
    margin: 5px 0 0 3px;
    z-index: 9;
}
.custom-checkbox label:before{
    width: 18px;
    height: 18px;
}
.custom-checkbox label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    background: white;
    border: 1px solid #bbb;
    border-radius: 2px;
    box-sizing: border-box;
    z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    transform: inherit;
    z-index: 3;
    transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
    border-color: #03A9F4;
    background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
    border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
    color: #b8b8b8;
    cursor: auto;
    box-shadow: none;
    background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
    max-width: 400px;
}
.modal .modal-header, .modal .modal-body, .modal .modal-footer {
    padding: 20px 30px;
}
.modal .modal-content {
    border-radius: 3px;
}
.modal .modal-footer {
    background: #ecf0f1;
    border-radius: 0 0 3px 3px;
}
.modal .modal-title {
    display: inline-block;
}
.modal .form-control {
    border-radius: 2px;
    box-shadow: none;
    border-color: #dddddd;
}
.modal textarea.form-control {
    resize: vertical;
}
.modal .btn {
    border-radius: 2px;
    min-width: 100px;
}	
.modal form label {
    font-weight: normal;
}</style>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Task Manger</title>
<!-- Boostrap Links-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

 <!-- Style css -->
 <link rel="stylesheet" href="./Style.css"/>
</head>
<body>

    <div class="container">
		<div class="table-responsive">
			<div class="table-wrapper">
				<div class="table-title">
					<div class="row">
						<div class="col-xs-6">
							<h2>Task<b>Manager</b></h2>
						</div>
						<div class="col-xs-6">
							<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Tasks</span></a>
							<a href="/boards/id/csv?boardId=2" class="btn btn-primary" data-toggle="modal"><i class="material-icons">&#xE24D;</i> Export to CSV</a>
							<a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>
						</div>
					</div>
				</div>
				<table class="table table-striped table-hover">
                    <thead>
                    \t\t\t\t\t\t<tr>
                    \t\t\t\t\t\t\t<th>
                    \t\t\t\t\t\t\t\t<span class="custom-checkbox">
                    \t\t\t\t\t\t\t\t\t<input type="checkbox" id="selectAll">
                    \t\t\t\t\t\t\t\t\t<label for="selectAll"></label>
                    \t\t\t\t\t\t\t\t</span>
                    \t\t\t\t\t\t\t</th>
                    \t\t\t\t\t\t\t<th>TaskId</th>
                    \t\t\t\t\t\t\t<th>TaskName</th>
                    \t\t\t\t\t\t\t<th>TaskDetails</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Type</th>
                                    <th></th>
                    \t\t\t\t\t\t</tr>
                    \t\t\t\t\t</thead>
					<tbody id="tbody2" >
                    \t\t\t\t\t<tr>
                    \t\t\t\t\t\t\t<td>
                    \t\t\t\t\t\t\t\t<span class="custom-checkbox">
                    \t\t\t\t\t\t\t\t\t<input type="checkbox" id="checkbox1" name="options[]" value="1">
                    \t\t\t\t\t\t\t\t\t<label for="checkbox1"></label>
                    \t\t\t\t\t\t\t\t</span>
                    \t\t\t\t\t\t\t</td>
                    \t\t\t\t\t\t\t<td>Guy</td>
                    \t\t\t\t\t\t\t<td>Implement new query</td>
                    \t\t\t\t\t\t\t<td>Show all employees older than 30</td>
                    \t\t\t\t\t\t\t<td><span class="status text-info">&bull;</span>To-Do</td>
                    \t\t\t\t\t\t\t<td>high</td>
                    \t\t\t\t\t\t\t<td>Feature</td>
                    \t\t\t\t\t\t\t<td id="td-id-3" class="td-class-3">2019-02-03 16:32:09</td>
                    \t\t\t\t\t\t\t<td>
                    \t\t\t\t\t\t\t\t<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    \t\t\t\t\t\t\t\t<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    \t\t\t\t\t\t\t</td>
					</tbody>
				</table>
				<script src="client.js"></script>
			</div>
		</div>
    </div>

	<!-- Edit Modal HTML -->
	<div  id ="editEmployeeModal" class="modal fade">
		<div class="modal-dialog">
\t\t\t<div class="modal-content">
\t\t\t\t<form>
\t\t\t\t\t<div class="modal-header">\t\t\t\t\t\t
\t\t\t\t\t\t<h4 class="modal-title">Add Tasks</h4>
\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-body">\t\t\t\t\t
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Employees</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>TaskName</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>TaskDetails</label>
\t\t\t\t\t\t\t<textarea class="form-control" required></textarea>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Status: </label>
\t\t\t\t\t\t\t<select class="form-select" aria-label="Default select example">
\t\t\t\t\t\t\t\t<option selected>to-do</option>
\t\t\t\t\t\t\t\t<option value="1">to-do</option>
\t\t\t\t\t\t\t\t<option value="2"> in-progress</option>
\t\t\t\t\t\t\t\t<option value="3">done</option>
\t\t\t\t\t\t\t  </select>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Priority: </label>
\t\t\t\t\t\t\t<select class="form-select" aria-label="Default select example">
\t\t\t\t\t\t\t\t<option selected>low</option>
\t\t\t\t\t\t\t\t<option value="1">low</option>
\t\t\t\t\t\t\t\t<option value="2"> Medium</option>
\t\t\t\t\t\t\t\t<option value="3">high</option>
\t\t\t\t\t\t\t  </select>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<div class='radio-container'>
\t\t\t\t\t\t\t\t<label>Type: </label>
\t\t\t\t\t\t\t\t<input checked=''  name='pet-gender' type='radio' value='Feature' required>
\t\t\t\t\t\t\t\t<label >Feature</label>
\t\t\t\t\t\t\t\t<input name='pet-gender' type='radio' value='bug'>
\t\t\t\t\t\t\t\t<label >bug</label>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-footer">
\t\t\t\t\t\t<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
\t\t\t\t\t\t<input type="submit" class="btn btn-success" value="Add">
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
	</div>
	<!-- Edit Modal HTML -->
	<div id="addEmployeeModal" class="modal fade">
	<div class="modal-dialog">
\t\t\t<div class="modal-content">
\t\t\t\t<form onsubmit="addTask()">
\t\t\t\t\t<div class="modal-header">\t\t\t\t\t\t
\t\t\t\t\t\t<h4 class="modal-title">Add Tasks</h4>
\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-body">\t\t\t\t\t
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>TaskName</label>
\t\t\t\t\t\t\t<input id='TaskName' type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>TaskDetails</label>
\t\t\t\t\t\t\t<textarea id='TaskDetails' class="form-control" required></textarea>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Status: </label>
\t\t\t\t\t\t\t<select id ='Status' class="form-select" aria-label="Default select example">
\t\t\t\t\t\t\t\t<option value="To-Do" selected>To-Do</option>
\t\t\t\t\t\t\t\t<option value="In Progress"> In Progress</option>
\t\t\t\t\t\t\t\t<option value="Done">Done</option>
\t\t\t\t\t\t\t  </select>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Priority: </label>
\t\t\t\t\t\t\t<select id='Priority' class="form-select" aria-label="Default select example">
\t\t\t\t\t\t\t\t<option value="Low" selected>Low</option>
\t\t\t\t\t\t\t\t<option value="Medium"> Medium</option>
\t\t\t\t\t\t\t\t<option value="High">High</option>
\t\t\t\t\t\t\t  </select>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<div class='radio-container'>
\t\t\t\t\t\t\t\t<label>Type: </label>
\t\t\t\t\t\t\t<select id='Type' class="form-select" aria-label="Default select example">
\t\t\t\t\t\t\t\t<option value="Bug" selected>Bug</option>
\t\t\t\t\t\t\t\t<option value="Feature">Feature</option>
\t\t\t\t\t\t\t  </select>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Assignee</label>
\t\t\t\t\t\t\t<input id="Assignee" type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>Creator</label>
\t\t\t\t\t\t\t<input id="Creator" type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-footer">
\t\t\t\t\t\t<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
\t\t\t\t\t\t<input type="submit" class="btn btn-success" value="Add">
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
		
	</div>
	<!-- Delete Modal HTML -->
	<div id="deleteEmployeeModal" class="modal fade">
		<div class="modal-dialogmodal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<h4 class="modal-title">Delete Boards</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<p>Are you sure you want to delete these Records?</p>
						<p class="text-warning"><small>This action cannot be undone.</small></p>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
						<input type="submit" class="btn btn-danger" value="Delete">
					</div>
				</form>
			</div>
		</div>
	</div>
	
 <script>
 var sendRequest = function () {
      var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let search = location.search.substring(1);
    let data = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    fetch("http://localhost:3030/boards", requestOptions)
      .then((data)=>{
        console.log(data);
        return data.json();
      })
      .then((objectData)=>{
       exdata = objectData.find(board => board.BoardId == data.boardId).Tasks;
       let myJSON = JSON.stringify(exdata);
       myJSON=JSON.parse(myJSON);
       let tableData="";
       // // console.log(myJSON);
        myJSON.forEach((values)=>{
          tableData+= "<tr>";
		  tableData+= "<th>";
		  tableData+="<th>"+values.TaskId+"</th>";
		  tableData+="<th>"+values.TaskName+"</th>";
		  tableData+="<th>"+values.TaskDetails+"</th>";
		  tableData+="<th>"+values.Status+"</th>";
		  tableData+="<th>"+values.Priority+"</th>";
		  tableData+="<th>"+values.Type+"</th>";+"</tr>";
          tableData+='     <td><a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>';
          tableData+='     <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td>';
        });
        document.getElementById("tbody2").innerHTML=tableData;
      })
      .catch(error => console.log('error', error))
 }
 
    var addTask = function () {
     let query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        const data = { "BoardId":  query.boardId,
                        "TaskName":document.getElementById("TaskName").value,
                        "TaskDetails":document.getElementById("TaskDetails").value,
                        "Status":document.getElementById("Status").value,
                        "Priority":document.getElementById("Priority").value,
                        "Type":document.getElementById("Type").value,
                        "Assignee":document.getElementById("Assignee").value,
                        "Creator":document.getElementById("Creator").value};
    fetch('http://localhost:3030/boards/id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
 </script>
	<script> window.onload=sendRequest()</script>
</body>
</html>
`;



