let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        console.log(this);
        this.students.forEach((student)=>{
            console.log(this.title + ": " + student);
        });
    }
};
group.showList.bind(group)();
