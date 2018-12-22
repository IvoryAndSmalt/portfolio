<!-- CONTACT FORM -->
<form action="" method="POST" id="contactform" class="bg-smalt">
    <div id="forminner">
        <div id="formtitle">
            <h2 id="formh2" class="thick french">
                Contactez-moi
            </h2>
            <h2 id="formh2" class="thick english">
                Contact me
            </h2>
        </div>
        <div id="forminputs">
            <div id="inptypetext">
            <!-- name french and english -->
                <input type="text" class="inptypetext bg-ivory regular french" required="required" placeholder="Nom" name="name">
                <input type="text" class="inptypetext bg-ivory regular english" required="required" placeholder="Name" name="name">
                <!-- email unilanguage -->
                <!-- regex : ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ -->
                <input type="email" class="inptypetext bg-ivory regular" required="required" placeholder="Email" name="email">
            </div>
            <div id="message">
                <textarea name="message" required="required" placeholder="Message" id="mymessage" class="bg-ivory regular"></textarea>
            </div>
            <div id="submit">
                <input type="submit" value="Envoyer" name="submit" class="french thick bg-smalt">
                <input type="submit" value="Send" name="submit" class="english thick bg-smalt">
            </div>
        </div>
    </div>

    <!-- add clear inputs -->
    <!-- add AJAX or PHP to popup message sent -->

        <!-- copyright -->
    <p id="copyright" class="thin">
        Copyright 2018 © Lucas van den Berg
    </p>

</form>