@media (min-width: 900px) {

    body{
        background-color: #2A2A2A;
        overflow-x: hidden;
        user-select: none;
    }
    #nav-logo{
        height: 60px;
        border-radius: 100%;
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.489));
        top: 10px;
        left: 10px;
        position: absolute;
    }
    nav{
        position: fixed;
        top: 0;
        width: 100%;
        height: 70px;
    }

    #nav-points{
        color: #686868;
        position: fixed;
        top: 0;
        width: 800px;
        height: 70px;
        right: 0;
        display: inline-block;
        flex-wrap: nowrap;
        text-wrap: nowrap;
    }

    #nav-points span{
        position: relative;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin-top: 50px;
        margin-left: 30px;
        margin-right: 30px;
        transition: 0.5s;
    }

    #nav-points span:hover{
        color: #2FB67D;
        cursor: pointer;
        transition: 0.5s;
    }

    #radial{
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        background-image: radial-gradient(circle at bottom, #3E3E3E, #2A2A2A 80%); 
        z-index: -1;
        /* #3E3E3E, #2A2A2A */
}

#point-active{
    color: #2FB67D;
}

#title{
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translate(-50%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #FFFFFF;
    font-size: 90px;
    text-align: center;
    text-wrap: nowrap;
    z-index: 999;
    filter: drop-shadow(2px 0px 10px #2A2A2A);
}






body {
    margin: 0;
    overflow: hidden;
  }


  .große-div::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }
  .große-div::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }

  .große-div::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
    cursor: pointer;
    z-index: 10000;
  }

  .große-div::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }

  body {
    margin: 0;
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px; /* Abstand zwischen den beiden großen Divs */
  }

  #div1 {
    width: 100%;
    height: 300px;
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
    top: 250px;
  }
  #div2 {
    width: 100%;
    height: 300px;
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
    top: 500px
  }
  #div3 {
    width: 100%;
    height: 300px;
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
    top:750px
  }



  
  .kleine-div {
    display: inline-block;
    width: 400px;
    height: 200px;
    margin: 20px;
    background-color: #2A2A2A;
    border-radius: 20px;
    position: relative;
  }
  .kleine-div{
    cursor: pointer;
  }

  .itm {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #codewatch{
    position: fixed;
    width: 80%;
    height: 90%;
    background-color: #2A2A2A;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.353));
    display: none;
  }

  #codewatch h1{
    color: white;
    margin-left: 50px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
  }

  #testbox{
    width: 45%;
    height: 85%;
    border-radius: 50px;
    position: absolute;
    top: 70px;
    left: 2%;
  }

  #testbox-center{
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  #codebox{
    width: 45%;
    height: 85%;
    margin-right: 50px;
    border-radius: 50px;
    position: absolute;
    top: 70px;
    right: 2%;
  }

  #code{
    border-radius: 50px;
    padding-left: 40px;
    user-select: all;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    color:#FFFFFF;
    overflow-y: scroll;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    font-size: 20px;
    overflow-x: scroll;
  }

  #close{
    filter: brightness(0) invert(1);
    position: absolute;
    top: 20px;
    width: 40px;
    right: 20px;
  }

  #close:hover{
    cursor: pointer;
    width: 44px;
    top: 18px;
    right: 18px;
  }



  #code:hover{
    cursor: grabbing;
  }

  #code::-webkit-scrollbar {
    width: 10px;
    background-color: #2A2A2A;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }
  #code::-webkit-scrollbar-thumb {
    background-color: #686868;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }

  #code::-webkit-scrollbar-thumb:hover {
    background-color: #686868;
    cursor: pointer;
    z-index: 10000;
  }

  #code::-webkit-scrollbar-track {
    background-color: #2A2A2A;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
  }







  /*CONTENT*/





  #button-green{
    padding: 20px;
    border-radius: 20px;
    width: 200px;
    background-color: #173800;
    border: transparent;
    transition: all 0.5s;
    color: white;
    filter: drop-shadow(0px 0px 10px black);
  }
  #button-green:hover{
    cursor: pointer;
    width: 250px;
    transition: all 0.5s;
    background-color: #317600;
  }




  #password-border{
    padding: 1%;
    border-radius: 7px;
    width: 200px;
    background-color: transparent;
    border: rgb(134, 134, 134) 2px solid;
    transition: all 0.5s;
    color: white;
    width: 240px;
    height: 30px;
    filter: drop-shadow(0px 0px 10px black);
    padding-left: 20px;
  }

  #password-border:hover{
    background-color: rgb(223, 223, 223);
  }

  #password-border:focus{
    outline: none;
    background-color: rgb(223, 223, 223);
    color: black;
  }





  .loader1 {
    width: 58px;
    height: 58px;
    border: 5px solid #a0a0a0;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 




}




@media (max-width: 900px) {
    body{
        background-color: #2A2A2A;
        overflow: hidden;
    }
    #nav-logo{
        width: 42px;
        flex-shrink: 0;
        border-radius: 100%;
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.489));
        top: 8px;
        left: 10px;
        position: absolute;
    }
    #nav-points{
        display: none;
    }

    .itm{
        display: none;
    }

    #radial{
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        background-image: radial-gradient(circle at bottom, #3E3E3E, #2A2A2A 60%); 
        z-index: -1;
        /* #3E3E3E, #2A2A2A */
        left: 50%;
        transform: translate(-50%);
}
#title{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #FFFFFF;
    font-size: 40px;
    text-align: center;
    line-height: 2.0;
    width: 200px;
}

#tile-line{
    width: 300px;
    height: 3px;
    position: absolute;
    top: 21.5%;
    background-color: #2FB67D;
    left: 50%;
    transform: translate(-50%);
}

#burger{
    width: 50px;
height: 31px;
flex-shrink: 0;
position: fixed;
top: 18px;
right: 20px;
}

#line1{
    position: relative;
    height: 5px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 8px;
}
#line2{
    position: relative;
    height: 5px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 8px;
}
#line3{
    position: relative;
    height: 5px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
}

}



