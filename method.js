const student = {
    id: 101,
    money: 5000,
    name: 'Rj Kibia',
    major: 'mathemathics',
    isRich: false,
    subject: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathemathics'
    },
    takeExam: function () {
        console.log(this.name, 'taking Exam');
    },
    treatDey: function (expense, bokshis) {
        this.money = this.money - expense - bokshis;
        return this.money;
    }

}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);