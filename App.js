(function(){
    const customerImage = document.querySelector('#customer-image')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const btn = document.querySelectorAll('.btn')
    let index=0
    const customers =[]

    function Customer(img,name,text){
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer(img,name,text){
      let Img = `./img/${img}.jpg `
      let customer = new Customer(Img,name,text)
      customers.push(customer)
    }
    createCustomer(0,'john','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam maiores, ipsum sint exercitationem minima voluptates.')
    createCustomer(1,'Sam','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus iure reprehenderit ab voluptas tempora itaque nihil!')
    createCustomer(2,'Zack','Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis suscipit tempore recusandae cum.')
    createCustomer(3,'Ryan','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sunt.')
    createCustomer(4,'Alice','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam unde quo rerum quia reiciendis obcaecati vel illum!')
    createCustomer(5,'Bob','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.')
    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index===0){
                    index=customer.length
                }
                index--
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
                
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index===customers.length){
                    index=0;
                }
                
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
                
            }
        })
    })

})()