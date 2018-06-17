//from system
import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';

const notificationType = {
  warning: "warning-sign",
  success: "ok",
  error: "ban-circle"
}

function Notification(props) {
  let { type, message } = props.props;
  console.log(notificationType["error"], Object.keys(props))
  return (
    <div style={{ zIndex: 9999 }}>
      <div style={{ opacity: 1, width: 270, minHeight: 60, backgroundColor: "#404044", float: "right", zIndex: 9999, position: "fixed", top: 10, right: 30 }}>
        <div style={{ display: "flex", flexDirection: "row", verticalAlign: "middle", marginTop: 14, padding: 5 }}>
          <span><Glyphicon glyph={notificationType[type]} /></span>
          <p style={{ color: "#f1f1f1", fontSize: 15, fontWeight: 300, marginLeft: 10 }}>{message}</p>
        </div>
      </div>
    </div>
  )
}



export const show = (type, message, time) => {

  const element = <Notification props={{ type, message, time }} />;
  const _element = <div> </div>;
  ReactDOM.render(
    element,
    document.getElementById('notification')
  );
  setTimeout(() => {
    ReactDOM.render(
      _element,
      document.getElementById('notification')
    );
  }, time)
}
