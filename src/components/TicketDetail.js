// We import the useContext hook.
import React, { useContext } from "react";
import PropTypes from "prop-types";
// We import ThemeContext.
import { ThemeContext } from "../context/theme-context";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 

  // We create our consumer.
  const theme = useContext(ThemeContext);

  // We create our styles.
  const styles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      {/* We apply our styles to each button. */}
      <button style={styles} onClick={onClickingEdit}>Update Ticket</button>
      <button style={styles} onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;