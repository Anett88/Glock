<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="\js\ajax_tokenes.js"></script>
    <script src="\js\osztaly.js"></script>
    <script src="\js\script.js"></script>

    <meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>Document</title>
</head>

<body>
    <main>
        <head><h1>Sablon</h1></head>

        <nav></nav>

        <article id="szulo"></article>

        <aside>
            <div class="valamiFejlec">
                <div>Cim:</div>
            </div>
            <form>
                <label for="bekertCim">Cim:</label>
                <input type="text" name="bekertCim" id="bekertCim" placeholder="A név amit meg akarzs változtatni..."><br>                
            </form>
            <input type="submit" value="Új adat felvétele:" class="ujAdatFelv">
        </aside>
        
        <footer>
            <div class="sablon">
                <h2 class="cim"></h2>
                <input type="button" class="modositgomb" value="Módosít">
                <input type="button" class="torolgomb" value="Töröl">
            </div>
        </footer>
    </main>
</body>
</html>
