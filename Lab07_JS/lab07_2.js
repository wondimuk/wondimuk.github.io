let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        console.log(this);
        this.students.forEach(function (student){
            console.log(this.title + ": " + student);
        }.bind(group));
    }
};
group.showList();
