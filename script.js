function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على قائمة الأعضاء
    const membersList = document.getElementById('list');

    // دالة لترتيب عناصر القائمة بشكل عشوائي
    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    // استدعاء ترتيب_عشوائي أوليًا
    Reorder_randomly();

});