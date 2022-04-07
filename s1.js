function main(){
    var ipadd = document.getElementById("ip").value;
    // alert("U have entered this IP Address : "+ipadd);// to check whether this function works or not
    docWrite(ipadd);
    getAdds(ipadd);
}

function validity(a,b,c,d)
{
    if(a>=0 && a<=255 && b>=0 && b<=255 && c>=0 && c<=255 && d>=0 && d<=255)
        return true;

    return false;    
}

function docWrite(ipadd){
    document.write("Given IP Address is : "+ipadd);
    document.write("<br>");
}

function getAdds(ipadd){
    var chunks=ipadd.split('.');
    var a=chunks[0];
    var b=chunks[1];
    var c=chunks[2];
    var d=chunks[3];
    
    a=a*1;
    b=b*1;
    c=c*1;
    d=d*1;
    // converting all the elements i.e. parts of the ip into numbers from string 


    var isValid=validity(a,b,c,d);
    if(isValid==false){
        alert("The given IP Address is invalid ");
        return ;
    }

    // alert(typeof(a));
    const abinary = a.toString(2);
    const bbinary = b.toString(2);
    const cbinary = c.toString(2);
    const dbinary = d.toString(2);
    document.write("IP Address in Binary : "+abinary+"."+bbinary+"."+cbinary+"."+dbinary);
    // document.write(bbinary);
    // document.write(cbinary);
    // document.write(dbinary);
    document.write("<br>");
    classcheck(a,b,c,d);
    document.write("<br>");

}

function classcheck(a,b,c,d){
    var check;
    if(a>=1 && a<=127 ){
        check=1;
        document.write("It is a class A IP \n");
       
        document.write("<br>");

        if(a==10){
            document.write("It is a private IP\n"); 
            
            document.write("<br>");

        }
        document.write("NID : "+a+".0.0.0");
        document.write("<br>");

        
        document.write("DBA : "+a+".225.255.255");
        document.write("<br>");

        
        document.write("LBA : 255.255.255.255");
        document.write("<br>");
        document.write("Number of Networks in Class A : 126 ")
        document.write("<br>");
        document.write("Number of Hosts per Network : 16,777,214");

        
    }
    else if(a>=128 && a<=191 && c==0 && d==0){
        document.write("It is a class B IP \n");
       
        document.write("<br>");

        if(a==176 && b>=16 && b<=31){
            document.write("It is a private IP\n"); 
            
            document.write("<br>");

        }
        document.write("NID : "+a+"."+b+".0.0");
        document.write("<br>");

        
        document.write("DBA : "+a+"."+b+".255.255");
        document.write("<br>");

        
        document.write("LBA : 255.255.255.255");
        document.write("<br>");
        document.write("Number of Networks in Class A : 16,382 ")
        document.write("<br>");
        document.write("Number of Hosts per Network : 65,534");


    }


    else if(a>=192 && a<=223 && d==0){
        document.write("It is a class C IP \n");
       
        document.write("<br>");

        if(a==192 && b==168){
            document.write("It is a private IP\n"); 
            
            document.write("<br>");

        }
        document.write("NID : "+a+"."+b+"."+c+".0");
        document.write("<br>");

        
        document.write("DBA : "+a+"."+b+"."+c+".255");
        document.write("<br>");

        
        document.write("LBA : 255.255.255.255");
        document.write("<br>");
        document.write("Number of Networks in Class A : 2,097,150 ")
        document.write("<br>");
        document.write("Number of Hosts per Network : 254");


    }


    else if(a>=224 && a<=239 ){
        document.write("It is a class D IP \n");
       
        document.write("<br>");

        
        
        
        document.write("Number of Networks in Class D : Not Available ")
        document.write("<br>");
        document.write("Number of Hosts per Network : Multicasting");


    }
    else if(a>=240){
        document.write("It is a class E IP \n");
       
        document.write("<br>");
        document.write("Number of Networks in Class D : Not Available ")
        document.write("<br>");
        document.write("Number of Hosts per Network : It is used for Research and experimental purposes");

        
    }
    
   

}





