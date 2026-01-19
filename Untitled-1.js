const studentdata = [
    {id : "122", name: "นายชยพัทธ์", score: "75", grade: "3.5", status: "ผ่าน"},
    {id : "110", name: "นาย...1", score: "50", grade: "1", status: "ผ่าน"},
    {id : "121", name: "นาย...2", score: "65", grade: "2.5", status: "ผ่าน"},
    {id : "120", name: "นาย...3", score: "60", grade: "2", status: "ผ่าน"} ,
    {id: "456", name: "Nattapong" ,score: "49", grade:"0",status: "ไม่ผ่าน"}
];

function showCert() {
 //ดึงข้อมูลมาาาาา
    const inputName = document.getElementById("search").value.trim();
    
    // ค้นหาข้อมูล
    const found = studentdata.find(student => student.id === inputName);

    if (found) {

        document.getElementById("reloadname").innerText = found.name;
        document.getElementById("reloadscore").innerText = found.score;
        document.getElementById("reloadgrade").innerText = found.grade;
        document.getElementById("reloadstatus").innerText = found.status;
        
        document.getElementById("result-box").style.display = "block";
    } else {
        // alert("ไม่พบข้อมูลรหัสนักเรียนนี้");
document.getElementById("reloadname").innerText = "ไม่พบข้อมูลนี้";
        document.getElementById("reloadscore").innerText = "";
        document.getElementById("reloadgrade").innerText = "";
        document.getElementById("reloadstatus").innerText = "";
        document.getElementById("result-box").style.display = "block";
    }
}