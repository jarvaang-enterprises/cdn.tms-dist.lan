function verdata(){log("Loading verification data");$("#nuv").load("/includes/nuv.php")}function verify(a){log("Verifying user");$("#status").load("/actions/verify.php","id="+a)};
