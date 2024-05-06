// Тема:  классы, конструкторы встроенные функции, аксессоры.
// Задание 1
// Реализуйте класс “Студент”. 
// Необходимо хранить в переменных-членах класса: ФИО, дату рождения, контактный телефон, город, страну, название учебного заведения, номер группы. 
// Реализуйте функции-члены класса для ввода данных, вывода данных, реализуйте аксессоры для доступа к отдельным переменным-членам. Добавьте необходимые конструкторы.

// Создать массив объектов, инициализировать и показать! 
// Выводим данные в разметку(не на консоль!!).
// Использовать CSS.
//  Желательно показать данные в таблице!


class Student {
    private initials: string;
    private birthday: string;
    private phone_number: string;
    private city: string;
    private country: string;
    private university: string;
    private group: number;

    constructor(initials: string, birthday: string, university: string, group: number, phone_number?: string, city?: string, country?: string) {
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

    public SetBirthday(birthday: string) {
        this.birthday = birthday;
    }

    public GetBirthday() {
        return this.birthday;
    }

    public SetPhoneNumber(phone_number: string) {
        this.phone_number = phone_number;
    }

    public GetPhoneNumber() {
        return this.phone_number;
    }

    public SetCity(city: string) {
        this.city = city;
    }

    public GetCity() {
        return this.city;
    }

    public SetCountry(country: string) {
        this.country = country;
    }

    public GetCountry() {
        return this.country;
    }

    public SetUniversity(university: string) {
        this.university = university;
    }

    public GetUniversity() {
        return this.university;
    }

    public SetGroup(group: number) {
        this.group = group;
    }

    public GetGroup() {
        return this.group;
    }
}

let students: Student[] = [
    new Student("Иванов Иван Иванович", "01.01.2000", "Университет", 101, "123-456-7890", "Город", "Страна"),
    new Student("Петров Петр Петрович", "02.02.2001", "Колледж", 202, "987-654-3210", "Город2", "Страна2"),
    new Student("Сидоров Сидор Сидорович", "03.03.2002", "Техникум", 303, "111-222-3333", "Город3", "Страна3"),
    new Student("Николаев Николай Николаевич", "04.04.2003", "Академия", 404, "444-555-6666", "Город4", "Страна4")
];


let table = document.getElementById("studentsTable") as HTMLTableElement;

students.forEach(student => {
    let row = table.insertRow();
    
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(student[key]));
        }
    }
});

