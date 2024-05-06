// Тема:  классы, конструкторы встроенные функции, аксессоры.
// Задание 1
// Реализуйте класс “Студент”. 
// Необходимо хранить в переменных-членах класса: ФИО, дату рождения, контактный телефон, город, страну, название учебного заведения, номер группы. 
// Реализуйте функции-члены класса для ввода данных, вывода данных, реализуйте аксессоры для доступа к отдельным переменным-членам. Добавьте необходимые конструкторы.
// Создать массив объектов, инициализировать и показать! 
// Выводим данные в разметку(не на консоль!!).
// Использовать CSS.
//  Желательно показать данные в таблице!
var Student = /** @class */ (function () {
    function Student(initials, birthday, university, group, phone_number, city, country) {
        this.initials = initials;
        this.birthday = birthday;
        this.university = university;
        this.group = group;
        if (phone_number)
            this.phone_number = phone_number;
        if (city)
            this.city = city;
        if (country)
            this.country = country;
    }
    Student.prototype.SetBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Student.prototype.GetBirthday = function () {
        return this.birthday;
    };
    Student.prototype.SetPhoneNumber = function (phone_number) {
        this.phone_number = phone_number;
    };
    Student.prototype.GetPhoneNumber = function () {
        return this.phone_number;
    };
    Student.prototype.SetCity = function (city) {
        this.city = city;
    };
    Student.prototype.GetCity = function () {
        return this.city;
    };
    Student.prototype.SetCountry = function (country) {
        this.country = country;
    };
    Student.prototype.GetCountry = function () {
        return this.country;
    };
    Student.prototype.SetUniversity = function (university) {
        this.university = university;
    };
    Student.prototype.GetUniversity = function () {
        return this.university;
    };
    Student.prototype.SetGroup = function (group) {
        this.group = group;
    };
    Student.prototype.GetGroup = function () {
        return this.group;
    };
    return Student;
}());
var students = [
    new Student("Иванов Иван Иванович", "01.01.2000", "Университет", 101, "123-456-7890", "Город", "Страна"),
    new Student("Петров Петр Петрович", "02.02.2001", "Колледж", 202, "987-654-3210", "Город2", "Страна2"),
    new Student("Сидоров Сидор Сидорович", "03.03.2002", "Техникум", 303, "111-222-3333", "Город3", "Страна3"),
    new Student("Николаев Николай Николаевич", "04.04.2003", "Академия", 404, "444-555-6666", "Город4", "Страна4")
];
var table = document.getElementById("studentsTable");
students.forEach(function (student) {
    var row = table.insertRow();
    for (var key in student) {
        if (student.hasOwnProperty(key)) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(student[key]));
        }
    }
});
