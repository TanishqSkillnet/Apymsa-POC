import React, { useState } from 'react'
import style from './style.css'

interface Notification {
  notification: string
}

const Notification: StorefrontFunctionComponent<Notification> = ({ notification }: { notification: string }) => {
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [toggleState, setToggleState] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents the outer div's onClick from being triggered
    setToggleState(!toggleState);
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: 'https://skillnet.vteximg.com.br/arquivos/autex_notification.png',
      message: 'Haz añadido nuevos productos a la lista Motores 2021.',
      time: 'Enero 17 a las 9:31 am',
      read: true
    },
    {
      id: 2,
      icon: 'https://skillnet.vteximg.com.br/arquivos/autex_notification.png',
      message: 'El pedido #e394c536 se ha entregado con éxito.',
      time: 'Enero 17 a las 9:31 am',
      read: false
    },
    {
      id: 3,
      icon: 'https://skillnet.vteximg.com.br/arquivos/autex_notification.png',
      message: 'Devolución aceptada #Dev0194y7t59. Consulta aquí para más información.',
      time: 'Enero 17 a las 9:31 am',
      read: false
    },
    {
      id: 4,
      icon: 'https://skillnet.vteximg.com.br/arquivos/autex_notification.png',
      message: 'El pedido #e394c536 se ha entregado con éxito.',
      time: 'Enero 17 a las 9:31 am',
      read: false
    },
  ]);

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    setShowOptions(false);
  };

  const handleDeleteAll = () => {
    setNotifications([]);
    setShowOptions(false);
  };

  const handleMoreOptionsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowOptions(!showOptions);
  };


  return (
    <div className={style.notification_container} onClick={() => { setShowNotification(!showNotification) }}>
      <div className={style.notification_image}>
        <img src={notification} alt="" />
      </div>
      {showNotification ?
        <div className={style.notification_content_main}>
          <div className={style.notification_content}>
            <div className={style.notification_menu}>
              <div style={{ color: "#1226aa" }}>
                <span>Notificaciones</span>
              </div>
              <div className={style.mostrar_toggle_logo}>
                <div className={style.mostrar_text}>
                  <span>Mostrar no leidos</span>
                </div>
                <div className={`${style.toggle_logo} ${toggleState ? style.active : ''}`} onClick={handleToggle}>
                  <div className={`${style.toggle_switch} ${toggleState ? style.active : ''}`} />
                </div>
              </div>
              <div className={style.sub_menu_notification} onClick={handleMoreOptionsClick}>
                <img src="https://skillnet.vteximg.com.br/arquivos/more_options.png" alt="More Options" />
                {showOptions && (
                  <div className={style.dropdown_menu}>
                    <button onClick={handleMarkAllAsRead}>Mark All as Read</button>
                    <button onClick={handleDeleteAll}>Delete All</button>
                  </div>
                )}
              </div>
              <div>
                <span>
                X
                </span>
              </div>
            </div>
            <div className={style.all_notifications}>
              <ul style={{ listStyle: "none" }} className={style.notification_list}>
                {notifications.filter(notification => !toggleState || !notification.read).map((notification) => (
                  <li key={notification.id}>
                    <div className={style.notification} style={{ backgroundColor: notification.read == false ? "#f5f7f8" : "transparent" }}>
                      <img src={notification.icon} alt="Notification Icon" className={style.icon} />
                      <div className={style.content}>
                        <p>{notification.message}</p>
                        <span className={style.time}>{notification.time}</span>
                      </div>
                      <button onClick={() => handleDeleteNotification(notification.id)}>Eliminar</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        : ""}
    </div>
  )
}

Notification.schema = {
  title: 'Notification Section',
  description: 'Adress Section',
  type: 'object',
  properties: {
    notification: {
      title: 'Image Url',
      description: "Image Url",
      type: 'string',
      default: null,
    }
  },
}

export default Notification
