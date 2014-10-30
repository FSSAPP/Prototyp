function onPageLoad()
{
    var openDB = getopenDb();
    if(!openDB)
    {               
        return;              
    }
    else
    {
     //db = openDB('mydatabase', '1.0', 'my db', 2*1024*1024);
     //db.transaction(function (t) {
     //t.executeSql('CREATE TABLE IF NOT EXISTS myTable(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL DEFAULT "JohnDoe", age INT NOT NULL);'  [] , null, null);      });
      //selRows();
	  //return db;
    }
}

function selRows() {
    
    var q = "select * from myTable";
    
    db.transaction(function (t) {
        t.executeSql(q, null, function (t, data) {
            var html = "<table><tr><td>ID</td><td>Name</td><td>Age</td></tr>";
            for (var i = 0; i < data.rows.length; i++) {
                  html += "<tr><td>" + 
                  data.rows.item(i).id + "</td><td>" +
                  data.rows.item(i).name + "</td><td>" +
                  data.rows.item(i).age + "</td></tr>";
            }
            html += "</table>";
            var el = document.getElementById("main");
            el.innerHTML = html;
        });
    });
}

function getopenDb() 
{
	    try 
        {
	        if (window.openDatabase) 
            {                   
                alert('Database Support');
	            return window.openDatabase;                   
	        } 
            else 
            {
	            alert('No HTML5 support');
	            return undefined;
	        }
	    }
	    catch (e) 
        {
	        alert(e);
	        return undefined;
	    }           
	}

function question1Answered(questionNumber)
{
    var nextQuestion = document.getElementById("Question2");
    nextQuestion.style.display = "block";
    nextQuestion.style.visibility = "visible";
    var finishedPic = document.getElementById("Question1Pic");
    finishedPic.style.display = "inline-block";
    finishedPic.style.visibility = "visible";
}

function question2Answered(questionNumber)
{
    var nextQuestion = document.getElementById("Question3");
    nextQuestion.style.display = "block";
    nextQuestion.style.visibility = "visible";
    var finishedPic = document.getElementById("Question2Pic");
    finishedPic.style.display = "inline-block";
    finishedPic.style.visibility = "visible";
}

function question3Answered(questionNumber)
{
    var nextQuestion = document.getElementById("Question4");
    nextQuestion.style.display = "block";
    nextQuestion.style.visibility = "visible";
    var finishedPic = document.getElementById("Question3Pic");
    finishedPic.style.display = "inline-block";
    finishedPic.style.visibility = "visible";
}

function question4Answered(questionNumber)
{
    var finishedPic = document.getElementById("Question4Pic");
    finishedPic.style.display = "inline-block";
    finishedPic.style.visibility = "visible";
}