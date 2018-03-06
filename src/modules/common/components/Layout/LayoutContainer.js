import { connect } from "react-redux";
import { actions as ui } from "modules/common/ducks/ui";
import Layout from "./Layout";

const mapStateToProps = store => {
  return {
    snackbarMessage: store.Ui.snackbarMessage,
    popupSnackbar: store.Ui.popupSnackbar
  };
};

const mapDispatchToProps = {
  closeSnackbar: ui.closeSnackbar
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
