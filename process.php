<?php 

    if (isset($_POST['submit'])){
        $username = $_POST['Name'] ;
        $contact = $_POST['Contact_No'] ;
        $email = $_POST['Email_ID'] ;
        $address = $_POST['Address'] ;

        if(empty($username) ||empty($contact) || empty($email) || empty($address)) {
            header('location:be_a_volunteer.php?error');
        }

        // else {
        //     $to = "abhijithshetty131@gmail.com"

        //     if(mail($to,$username,$contact,$email,$address))    {
        //         header("location:be_a_volunteer.php?success");
        //     }
        // }
    }




?>