import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Alert {
  static alertSuccess(title, html, callback) {
    const MySwal = withReactContent(Swal);
    const titleAlert = <strong>{title}</strong>;
    const htmlAlert = <i>{html}</i>;
    MySwal.fire({
      title: titleAlert,
      html: htmlAlert,
      icon: "success",
    }).then(callback);
  }

  static alertFailed(title, html, callback) {
    const MySwal = withReactContent(Swal);
    const titleAlert = <strong>{title}</strong>;
    const htmlAlert = <i>{html}</i>;
    MySwal.fire({
      title: titleAlert,
      html: htmlAlert,
      icon: "error",
    }).then(() => {
      return callback();
    });
  }

  static optionAlert(title, html, callbackSuccess, callbackFailed) {
    const MySwal = withReactContent(Swal);
    const titleAlert = <strong>{title}</strong>;
    const htmlAlert = <i>{html}</i>;

    MySwal.fire({
      title: titleAlert,
      html: htmlAlert,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        callbackSuccess();
      } else {
        callbackFailed();
      }
    });
  }
}

export default Alert;
