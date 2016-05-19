/**
 * Created by НАФТУСЯ on 19.05.2016.
 */
function GoogleCallback(jqueryObj, data) {

    var resultObj = data.results;
    console.log('data', resultObj);
    $('.js-result').find('li').remove();

    for (var i = 0; i < resultObj.length; i++) {
        console.log(resultObj[i]);
        var item = '<li class="item">' +
            '<a class="title" href="' + resultObj[i].url + '" target="_blank">' + resultObj[i].title + '</a>' +
            '<p class="contentBox">' + resultObj[i].content + '</p>' +
            '</li>';

        $('.js-result').append(item);
    }
}

$(function() {
    function search() {
        var inputTxt = $('.js-input').val();

        $.ajax({
            url: 'http://api.riffsy.com/v1/search?tag=cat',
            dataType: "jsonp",
            success: function(data) {
            }
        });
    }

    $('body').on('click', '.js-btn', function() {
        search();
    });
    $(document).keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            search();
        }
    });


    // part two
    function Human(name, age, sex, height, weight){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.height = height;
        this.weight = weight
    }

    Human.prototype.constructor = Human;

    function Worker(name, age, sex, height, weight, job, salary){
        Human.apply(this, arguments);
        this.job = job;
        this.salary = salary;
    }

    Worker.prototype = Object.create(Human.prototype);

    Worker.prototype.work = function(){
        console.log("I'm work");
    }

    Worker.prototype.constructor = Worker;

    function Student(name, age, sex, height, weight, study, stipend){
        Human.apply(this, arguments);
        this.study = study;
        this.stipend = stipend;
    }

    Student.prototype = Object.create(Human.prototype);

    Student.prototype.watchTvShows = function(){
        console.log("I'm watch TV shows");
    }

    Student.prototype.constructor = Student;

    worker1 = new Worker('Диана', 37, 'женский', '170cm', '50kg', 'it', '3000$');
    console.log(worker1);
    worker2 = new Worker('Денис', 30, 'мужской', '190cm', '100kg', 'машинист', '5000грню');
    console.log(worker2);
    student1 = new Student('Наталья', 19, 'женский', '170cm', '70kg', 'студентка', '600грн.');
    console.log(student1);
});