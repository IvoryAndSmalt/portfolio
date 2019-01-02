<?php

// include('info.php');

// $dbh = new PDO('mysql:host='. $host .';dbname='. $dbname, $user, $pass);
// $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);

function getAllRepo(){
    global $dbh;

    $all_repo = $dbh->prepare('SELECT * FROM projets');
    $all_repo->execute();

    $all_repo = $all_repo->fetchAll();

    return $all_repo;
}

function getAllIDs(){
    global $dbh;

    $all_ids = $dbh->prepare('SELECT id_projet FROM projets');
    $all_ids->execute();

    $all_ids = $all_ids->fetchAll();

    return $all_ids;
}

function getOneProject($oui){
    global $dbh;

    $all_ids = $dbh->prepare('SELECT * FROM projets WHERE id_projet = ?');
    $all_ids->execute([$oui]);

    $all_ids = $all_ids->fetchAll();

    return $all_ids;
}