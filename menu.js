//get totla
//creat product
//save local storage
//clear inputs
//read
//count
//delete
//update
//search
//clean data ( يعني مافي تحط شي فاضي)

//1-input:
let title = document.getElementById('title');
let buy = document.getElementById('buy');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood = 'create';//تغيير زر ابديت او زر كرييت
let tmp;//هدا مشان i ينشاف عام 


console.log(title,price,taxes,ads,discount,total,count,category,submit)//for check

//get total
function getTotal(){/*تشتغل لما اكتب على اي انبوت من price taxes ads discount منحط اونكياب في اتش تمل*/
    console.log('done');//check اي كلمة كتبها على زرار الاربعة يعطيك دون

    //price + tax +ads -discount
    //price لازم موجود الباقي موضروري
    if(taxes.value !=''){//هيك ما ح يشتغل الكود غير لما نعبي البرايس
        let result = (+taxes.value) - +discount.value;
        total.innerHTML = result;
        //+convert string to number

        //هلأ من اجل التوتال 
        total.style.background='green';//عند كتابة تصير لونه اخضر
        

    }else{//لو مافي بيانات
        total.innerHTML = '';//فضي التوتال
        total.style.background =  'rgb(181, 14, 14)';//رجعو للون الاحمر

    }

}


//create product:
//احسن مكان لحفظ الداتا هي array 
let datapro;
if(localStorage.product !=null){//اذا في بيانات
    datapro = JSON.parse( localStorage.product)
}
//لو مافي بيانات
else{
    datapro = [];
}

submit.onclick = function()//لما اضغط على السابميت يحفظ
{//هي الفانكشن يتم انشاء منتج جديد
    let newpro={//this is object
       title:title.value.toLowerCase(),//لان انامحتاج القيمة يلي جواتها
       buy:buy.value,
       price:price.value,
       taxes:taxes.value,
       ads:ads.value,
       discount:discount.value,//البافي input
       total:total.innerHTML,//this isnot input
       count:count.value,
       category:category.value.toLowerCase(),//.toLowerCase() للبحث كابيتال او سمول لاتر

    }
    if(title.value !='' && price.value != '' && newpro.count < 100)//هون اذا البيانات صحيحة //اذا تايتل وبرايس مو فاضية انشئ منتج وعدل
    //هيك صار اذا تايتل وبرايس مافي بيانات مابيعمل بيانات ولا بكرييت
    //بس بيعملك 99 منتج مع بعض اكتر من هيك ما بيعمل
    {
//هون ينشا كرييت
if(mood == 'create')
{
    if(newpro.count > 1)//>1 because count ,if inside data or no >0
    {
        //لوب تتكر بعدد فاليو كونت
        for(let i = 0;i < newpro.count;i++)
        {
            datapro.push(newpro)//مشان تضيف عنصر 
        }
    }else{
        datapro.push(newpro)//مشان تضيف عنصر pucsh for add 
    }
}else{//اذا كان الموود ابديت
  datapro [tmp]=newpro;//tmp كانك حاطط i
  mood = 'create';//رجع المود لكرييت
  submit.innerHTML = 'create';//غير الزر الى كلمة كرييت
  count.style.display = 'block';// يظهر رجع كونت 
  

}

clearData()//شغل هي الفانكشن لما تضغط على الزرار هنا
/*
  x = [1,2,3];
  x[0] = 5 هيك تعديل 

*/
    }

  
   


    localStorage.setItem('product',JSON.stringify(datapro))//حفظ الداتا بشكل دائم
    console.log(datapro)//check
   
    showData()//عرض الداتا لما تضغط على زر كرييت
}


//clear inputs
function clearData(){//لما اضغط على كرييت يروح للانبوت ويفضيها
    title.value = '';//فضي الفاليو يلي جواه
    buy.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML='';//هي لان ليست انبوت
    count.value='';
    category.value='';
    

}


//read
function showData(){//اعرض البيانات عند الضغط على زر كرييت
   getTotal();//لارجاع كلمة توتال الى الاحمر بعد الكرييت
   
   
   
    let table= '';//بدي ضيف تابل في تي بادي
     //بدي جيب كل الداتا يلي ارييه برو وضيفها ع التابل
    //ارييه في داتا في اي مشروع بدك تعمل عليه لووب
    for(let i = 0; i < datapro.length;i++)
    {
        //انا عملت لووب حتى جيب البيانات من ارييه واضيفها في التابل
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].buy}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
          </tr>
        `;
       //ضيف هذا الصف بالكامل
       //+ ضيف صف جديد ما تمسح يلي قبله
       //i =id,datapro[i].title هي تاتيل
       //onclick delete لما اضغط عليه شغل فانكشن الحذف
       //i+1 لا تبلش من المنتجات من الصفر بلش من الواحد


    }

   document.getElementById('tbody').innerHTML = table;//تيبادي ضيف عليه المتغير تابل
   
   let btnDelete = document.getElementById('deleteAll');
   if(datapro.length > 0)//for delete all اكبر من الصفر معناها في بيانات
   {//add butoon 
    btnDelete.innerHTML = `
    <button onclick='deleteAll()'>delete All(${datapro.length})</button>
    ` //${datapro.length} عدد المنتجات المحفوظة
    
   //onclick اذا ضغطت على ديليت اوول حذيف كلشي
}else{//اذا ما في بيانات حذيف كلشي موجود
    btnDelete.innerHTML ='';//مافي زر

}}
showData() //ح تشتغل دائما تبع عرض المنتجات


//delete
function deleteData(i)//لازم باريمتر لان بدي اعرف اي منتج بدي امسح
//i هو انديكس يلي بدي احذف منه 
//منحطها بزر الديليت
{
console.log(i);//for check
datapro.splice(i,1);//مسحت من الارايه
localStorage.product = JSON.stringify(datapro);
showData();//مشان يحذف بدون رفريش
}


//delete all
//اذا بيانات يظهرلي اذا ما في بيانات مختفي
function deleteAll(){
    //بدك تحذف البيانات في لوكال ستوريج والاريه
    localStorage.clear();//مسح من لوكال ستوريج
    datapro.splice(0);//ح يمسح من انديكس صفر لاخر شي
    showData();//مشان يحذف بدون رفريش
}

//count

//update

function updateData(i)//العنصر يلي بيتعدل
{
  console.log(i);//check
  title.value = datapro[i].title;//لوضع التايتل في مربع التايتل
  buy.value = datapro[i].buy;
  price.value = datapro[i].price;
  taxes.value = datapro[i].taxes;
  ads.value = datapro[i].ads;
  discount.value = datapro[i].discount;
  getTotal();//شغل فانكشن توتال
  count.style.display = 'none';//اخفاء الكونت
  category.value = datapro[i].category;
  submit.innerHTML = 'update';//تبديل كلمة كرييت ب ابديت
  mood='update';
  tmp = i;//هيك صارت الi منشافة بكل الفانكشن
  scroll({
    top:0, //يطلع اوتوماتيكي لفوق
    behavior:'smooth',//تطع ببطئ
  })

}

//search
//1.mood serch
let searchMood = 'title';
function getSearchMod(id)
{
    console.log(id)
    let search = document.getElementById('search');
    if(id == 'searchTitle')//يعني اذا انت ضغطت على زر السيرش تاتيل
    {
        searchMood = 'title';
        search.placeholder= 'search by title';
    }else{
        searchMood = 'category';
        search.placeholder= 'search by category';
    }
    // او فيتك تعمل بدل سيرش باي تاتيتل وسيرش باي كاتيكوري
    //  search.placeholder= 'search by '+searchMood;تحط 
    search.focus();//لما اضغط على زر السيرش حط فوكس على مربع سيرش
    search.value = '';
    showData();
    console.log(searchMood)
}
//2.funcrtion search
function searchData(value)
{

    console.log(value);
    let table = '';
    if(searchMood == 'title')
    {
        for(let i = 0;i < datapro.length;i++){
            if(datapro[i].title.includes(value.toLowerCase())){
                //.toLowerCase() البيانات تتاخد سموللاتر
                console.log(i)
                table += `
                <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].buy}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
            `;
                

            }
        }
    }
    
    else
    {
        for(let i = 0;i < datapro.length;i++){
            if(datapro[i].category.includes(value.toLowerCase())){
                  //.toLowerCase() البيانات تتاخد سموللاتر 
                console.log(i)
                table += `
                <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].buy}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
            `;
                

            }
        }
    }
    document.getElementById('tbody').innerHTML = table;//تيبادي ضيف عليه المتغير تابل
}
            


//clean data (ما في شي فاضي او ارقام كتيرة)

