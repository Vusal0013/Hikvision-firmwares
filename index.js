# $language = "JScript"
# $interface = "1.0"

// Connect using a pre-defined session.

function main() {

 // var session;
  //session = crt.Dialog.Prompt("Enter a session name", "Connect");

  crt.Dialog.MessageBox("SecureCRT version is: " + crt.Session.Config)
}
