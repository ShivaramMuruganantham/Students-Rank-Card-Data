let head = 0;
        function btnclick(){


            const in_roll = document.getElementById('roll_no');
            const in_name = document.getElementById('name');
            const in_tamil = document.getElementById('tamil');
            const in_english = document.getElementById('english');
            const in_maths = document.getElementById('maths');
            const in_science= document.getElementById('science');
            const in_social = document.getElementById('social');

            const table = document.getElementById('table');
            const thead = document.getElementById('table_head');

            let roll = Number(in_roll.value);
            let name = in_name.value;    
            let num1 = Number(in_tamil.value);
            let num2 = Number(in_english.value);
            let num3 = Number(in_maths.value);
            let num4 = Number(in_science.value);
            let num5 = Number(in_social.value);

            if((roll != "") && (name != "") && (num1 != "") && (num2 != "") && (num3 != "") && (num4 != "") && (num5 != "")){
                
                if (head == 0){
    
                    const table_head_row = document.createElement('tr');
                    const th_roll = document.createElement('th');
                    const th_name = document.createElement('th');
                    const th_tamil= document.createElement('th');
                    const th_english = document.createElement('th');
                    const th_maths = document.createElement('th');
                    const th_science = document.createElement('th');
                    const th_social = document.createElement('th');
                    const th_total = document.createElement('th');
                    const th_p_f = document.createElement('th');
                    const th_rank = document.createElement('th');
        
            
                    th_roll.innerHTML = "Rollno";
                    th_name.innerHTML = "Name";
                    th_tamil.innerHTML = "Tamil";
                    th_english.innerHTML = "English";
                    th_maths.innerHTML = "Maths";
                    th_science.innerHTML = "Science";
                    th_social.innerHTML = "Social";
                    th_total.innerHTML = "Total Marks"
                    th_p_f.innerHTML = "Result";
                    th_rank.innerHTML = "Grade";
        
                    th_roll.style.padding = "10px";
                    th_name.style.padding = "10px";
                    th_tamil.style.padding = "10px";
                    th_english.style.padding = "10px";
                    th_maths.style.padding = "10px";
                    th_science.style.padding = "10px";
                    th_social.style.padding = "10px";
                    th_total.style.padding = "10px";
                    th_p_f.style.padding = "10px";
                    th_rank.style.padding = "10px";
    
                    table_head_row.appendChild(th_roll);
                    table_head_row.appendChild(th_name);
                    table_head_row.appendChild(th_tamil);
                    table_head_row.appendChild(th_english);
                    table_head_row.appendChild(th_maths);
                    table_head_row.appendChild(th_science);
                    table_head_row.appendChild(th_social);
                    table_head_row.appendChild(th_total);
                    table_head_row.appendChild(th_p_f);
                    table_head_row.appendChild(th_rank);
        
                    thead.appendChild(table_head_row);
                    // table.appendChild(thead);
                    head = 1;
                }
    
                const tbody = document.getElementById('table_body');
                tbody.style.textAlign = "center";
                
    
                const table_body_row = document.createElement('tr');
                const td_roll = document.createElement('td');
                const td_name = document.createElement('td');
                const td_tamil = document.createElement('td');
                const td_english = document.createElement('td');
                const td_maths = document.createElement('td');
                const td_science = document.createElement('td');
                const td_social = document.createElement('td');
                const td_total = document.createElement('td');
                const td_p_f = document.createElement('td');
                const td_rank = document.createElement('td');
                
                table_body_row.style.borderBottom = "1px solid black"
                
                const tamil_p_f = document.createElement('span');
                const english_p_f = document.createElement('span');
                const maths_p_f = document.createElement('span');
                const science_p_f = document.createElement('span');
                const social_p_f = document.createElement('span');
    
                if(num1 >= 35){
    
                    tamil_p_f.innerHTML ="/" + "P";
                }
                else{
                    tamil_p_f.innerHTML = "/" + "F";
                }
                if(num2 >= 35){
    
                    english_p_f.innerHTML ="/" + "P";
                }
                else{
                    english_p_f.innerHTML = "/" + "F";
                }
                if(num3 >= 35){
    
                    maths_p_f.innerHTML ="/" + "P";
                }
                else{
                    maths_p_f.innerHTML = "/" + "F";
                }
                if(num4 >= 35){
    
                    science_p_f.innerHTML ="/" + "P";
                }
                else{
                    science_p_f.innerHTML = "/" + "F";
                }
                if(num5 >= 35){
    
                    social_p_f.innerHTML ="/" + "P";
                }
                else{
                    social_p_f.innerHTML = "/" + "F";
                }
    
                let sum =  num1 + num2 + num3 + num4 + num5;
    
                
                
                td_roll.innerHTML = in_roll.value ;
                td_name.innerHTML = in_name.value;
                td_tamil.innerHTML =  Number(in_tamil.value);
                td_english.innerHTML = Number(in_english.value);
                td_maths.innerHTML = Number(in_maths.value);
                td_science.innerHTML = Number(in_science.value);
                td_social.innerHTML = Number(in_social.value);
                td_total.innerHTML = sum + "/" + "500";

                console.log(typeof(sum));
    
                
                td_tamil.appendChild(tamil_p_f);
                td_english.appendChild(english_p_f);
                td_maths.appendChild(maths_p_f);
                td_science.appendChild(science_p_f);
                td_social.appendChild(social_p_f);

                if((num1 >= 35) && (num2 >= 35) && (num3 >= 35) && (num4 >= 35) && (num5 >= 35) && (sum > 175)){
                    td_p_f.innerHTML = "PASS";
                }
                else{
                    td_p_f.innerHTML = "FAIL"
                }
                    if((sum > 490) && (sum <= 500) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "O";
                    }
                    else if((sum > 450) && (sum <= 490) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "A+";
                    }
                    else if((sum > 400) && (sum <= 450) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "A";
                    }
                    else if((sum > 350) && (sum <= 400) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "B+";
                    }
                    else if((sum > 300) && (sum <= 350) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "B";
                    }
                    else if((sum > 250) && (sum <= 300) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "C";
                    }
                    else if((sum > 200) && (sum <= 250) && (td_p_f.innerText == "PASS")){
                        td_rank.innerHTML = "D";
                    }
                    else{
                        td_rank.innerHTML = "NIL";
                    }
                
    
                table_body_row.appendChild(td_roll);
                table_body_row.appendChild(td_name);
                table_body_row.appendChild(td_tamil);
                table_body_row.appendChild(td_english);
                table_body_row.appendChild(td_maths);
                table_body_row.appendChild(td_science);
                table_body_row.appendChild(td_social);
                table_body_row.appendChild(td_total);
                table_body_row.appendChild(td_p_f);
                table_body_row.appendChild(td_rank);
    
                tbody.appendChild(table_body_row);
                console.log(tbody);
    
                in_roll.value = "";
                in_name.value = "";
                in_tamil.value = "";
                in_english.value = "";
                in_maths.value = "";
                in_science.value = "";
                in_social.value = "";

            }
            let err1 = document.getElementById("err1");
            let err1_i = document.getElementById("err1_i");
            if(roll == ""){
                in_roll.style.borderBottom = "2px solid red";
                in_roll.style.backgroundColor = "#fee2e2";
                err1.innerHTML = "This is Required Field";
                err1.style.color = "red";
                err1_i.style.display = "block";
            }
            else{
                in_roll.style.border = "";
                in_roll.style.backgroundColor = "";
                err1.innerHTML = "";
                err1_i.style.display = "none"
            }

            let err2 = document.getElementById("err2");
            let err2_i = document.getElementById("err2_i");
            if(name == ""){
                in_name.style.borderBottom = "2px solid red";
                in_name.style.backgroundColor = "#fee2e2";
                err2.innerHTML = "This is Required Field";
                err2.style.color = "red";
                err2_i.style.display = "block";
            }
            else{
                in_name.style.border = "";
                in_name.style.backgroundColor = "";
                err2.innerHTML = "";
                err2_i.style.display = "none"
            }

            let err3 = document.getElementById("err3");
            let err3_i = document.getElementById("err3_i");
            if(num1 == ""){
                in_tamil.style.borderBottom = "2px solid red";
                in_tamil.style.backgroundColor = "#fee2e2";
                err3.innerHTML = "This is Required Field";
                err3.style.color = "red";
                err3_i.style.display = "block";
            }
            else{
                in_tamil.style.border = "";
                in_tamil.style.backgroundColor = "";
                err3.innerHTML = "";
                err3_i.style.display = "none"
            }

            let err4 = document.getElementById("err4");
            let err4_i = document.getElementById("err4_i");
            if(num2 == ""){
                in_english.style.borderBottom = "2px solid red";
                in_english.style.backgroundColor = "#fee2e2";
                err4.innerHTML = "This is Required Field";
                err4.style.color = "red";
                err4_i.style.display = "block";
            }
            else{
                in_english.style.border = "";
                in_english.style.backgroundColor = "";
                err4.innerHTML = "";
                err4_i.style.display = "none"
            }

            let err5 = document.getElementById("err5");
            let err5_i = document.getElementById("err5_i");
            if(num3 == ""){
                in_maths.style.borderBottom = "2px solid red";
                in_maths.style.backgroundColor = "#fee2e2";
                err5.innerHTML = "This is Required Field";
                err5.style.color = "red";
                err5_i.style.display = "block";
            }
            else{
                in_maths.style.border = "";
                in_maths.style.backgroundColor = "";
                err5.innerHTML = "";
                err5_i.style.display = "none"
            }

            let err6 = document.getElementById("err6");
            let err6_i = document.getElementById("err6_i");
            if(num4 == ""){
                in_science.style.borderBottom = "2px solid red";
                in_science.style.backgroundColor = "#fee2e2";
                err6.innerHTML = "This is Required Field";
                err6.style.color = "red";
                err6_i.style.display = "block";
            }
            else{
                in_science.style.border = "";
                in_science.style.backgroundColor = "";
                err6.innerHTML = "";
                err6_i.style.display = "none"
            }

            let err7 = document.getElementById("err7");
            let err7_i = document.getElementById("err7_i");
            if(num5 == ""){
                in_social.style.borderBottom = "2px solid red";
                in_social.style.backgroundColor = "#fee2e2";
                err7.innerHTML = "This is Required Field";
                err7.style.color = "red";
                err7_i.style.display = "block";
            }
            else{
                in_social.style.border = "";
                in_social.style.backgroundColor = "";
                err7.innerHTML = "";
                err7_i.style.display = "none"
            }
            
            if((roll == "") && (name == "") && (num1 == "") && (num2 == "") && (num3 == "") && (num4 == "") && (num5 == "")){
                alert("You need to fill the form ")
            }
            
        } 