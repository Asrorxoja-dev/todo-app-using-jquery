$(document).ready(function(){

    $('#taskInput').val('');

    $('#taskInput').change(function(){
        let input = $(this).val().trim(); 
        if(input !== '') { 

            
            $('ul').append('<li>' + input +  ' <i class="fas fa-check"></i>  <i class="fas fa-trash"></i></li>');
            $(this).val('');
            saveTasks(); 
        }
    });

    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(200, function() {
            $(this).remove(); 
            saveTasks(); 
        });
    });

    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
        saveTasks(); 
    });

    function loadTasks() {
        let tasks = localStorage.getItem('tasks');
        if (tasks) {
            $('ul').html(tasks);
        }
    }

    
    function saveTasks() {
        let tasks = $('ul').html();
        localStorage.setItem('tasks', tasks);
    }

    loadTasks();

});
