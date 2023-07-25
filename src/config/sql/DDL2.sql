CREATE DATABASE db_dreamsoft;

CREATE TABLE assistance (
  idAssistance int NOT NULL AUTO_INCREMENT,
  idUser int DEFAULT NULL,
  loginTimeAssistance datetime DEFAULT NULL,
  logoutTimeAssistance datetime DEFAULT NULL,
  hourCountAssistance int DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (idAssistance),
  UNIQUE KEY hourCountAssistance (hourCountAssistance),
  KEY idUser (idUser),
  CONSTRAINT assistance_ibfk_1 FOREIGN KEY (idUser) REFERENCES userhotels (idUser) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE bills (
  idBill int NOT NULL AUTO_INCREMENT,
  totalPerNightBill int DEFAULT NULL,
  totalPerServiceBill int DEFAULT NULL,
  discountBill int DEFAULT NULL,
  chargesBill int DEFAULT NULL,
  totalBruteBill int DEFAULT NULL,
  toPayBill int DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idReservation int DEFAULT NULL,
  PRIMARY KEY (idBill),
  KEY idReservation (idReservation),
  CONSTRAINT bills_ibfk_1 FOREIGN KEY (idReservation) REFERENCES reservations (idReservation) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE cities (
  idCity int NOT NULL AUTO_INCREMENT,
  nameCity varchar(20) DEFAULT NULL,
  PRIMARY KEY (idCity),
  UNIQUE KEY nameCity (nameCity)
) ;

CREATE TABLE consumptions (
  amount int DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  packagePackageId int NOT NULL,
  productIdProduct varchar(20) NOT NULL,
  PRIMARY KEY (packagePackageId,productIdProduct),
  KEY productIdProduct (productIdProduct),
  CONSTRAINT consumptions_ibfk_1 FOREIGN KEY (packagePackageId) REFERENCES packages (packageId) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT consumptions_ibfk_2 FOREIGN KEY (productIdProduct) REFERENCES products (idProduct) ON DELETE CASCADE ON UPDATE CASCADE
) ;

CREATE TABLE custumers (
  idCustumer int NOT NULL,
  nameCustumer varchar(40) DEFAULT NULL,
  birthdateCustomer date DEFAULT NULL,
  addressCustomer varchar(70) DEFAULT NULL,
  emailCustomer varchar(100) DEFAULT NULL,
  phoneCustomer int DEFAULT NULL,
  jobCustomer varchar(100) DEFAULT NULL,
  companyCustomer varchar(40) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idCity int DEFAULT NULL,
  PRIMARY KEY (idCustumer),
  UNIQUE KEY emailCustomer (emailCustomer),
  KEY idCity (idCity),
  CONSTRAINT custumers_ibfk_1 FOREIGN KEY (idCity) REFERENCES cities (idCity) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE notes (
  idNote int NOT NULL AUTO_INCREMENT,
  titleNote varchar(20) DEFAULT NULL,
  contentNote text,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idUser int DEFAULT NULL,
  PRIMARY KEY (idNote),
  KEY idUser (idUser),
  CONSTRAINT notes_ibfk_1 FOREIGN KEY (idUser) REFERENCES userhotels (idUser) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE packages (
  packageId int NOT NULL AUTO_INCREMENT,
  totalXService int DEFAULT NULL,
  totalXproducts int DEFAULT NULL,
  totalPackage bigint DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idRoom int DEFAULT NULL,
  PRIMARY KEY (packageId),
  KEY idRoom (idRoom),
  CONSTRAINT packages_ibfk_1 FOREIGN KEY (idRoom) REFERENCES rooms (idRoom) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE packageservices (
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  packageId int NOT NULL,
  serviceId int NOT NULL,
  PRIMARY KEY (packageId,serviceId),
  KEY serviceId (serviceId),
  CONSTRAINT packageservices_ibfk_1 FOREIGN KEY (packageId) REFERENCES packages (packageId) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT packageservices_ibfk_2 FOREIGN KEY (serviceId) REFERENCES services (idService) ON DELETE CASCADE ON UPDATE CASCADE
) ;

CREATE TABLE products (
  idProduct varchar(20) NOT NULL,
  nameProduct varchar(20) DEFAULT NULL,
  typeProduct varchar(20) DEFAULT NULL,
  desciptionProduct varchar(60) DEFAULT NULL,
  priceSingleProduct int DEFAULT NULL,
  stock varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (idProduct),
  UNIQUE KEY nameProduct (nameProduct)
) ;

CREATE TABLE reservations (
  idReservation int NOT NULL AUTO_INCREMENT,
  checkInDateReservation datetime DEFAULT NULL,
  checkOutDateReservation datetime DEFAULT NULL,
  daysReservation int DEFAULT NULL,
  companionReservation tinyint(1) DEFAULT NULL,
  reasonReservation varchar(20) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idCustumer int DEFAULT NULL,
  idReservationStatus int DEFAULT NULL,
  packageId int DEFAULT NULL,
  idUser int DEFAULT NULL,
  PRIMARY KEY (idReservation),
  KEY idCustumer (idCustumer),
  KEY idReservationStatus (idReservationStatus),
  KEY packageId (packageId),
  KEY idUser (idUser),
  CONSTRAINT reservations_ibfk_1 FOREIGN KEY (idCustumer) REFERENCES custumers (idCustumer) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT reservations_ibfk_2 FOREIGN KEY (idReservationStatus) REFERENCES reservationstatuses (idReservationStatus) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT reservations_ibfk_3 FOREIGN KEY (packageId) REFERENCES packages (packageId) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT reservations_ibfk_4 FOREIGN KEY (idUser) REFERENCES userhotels (idUser) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE reservationstatuses (
  idReservationStatus int NOT NULL AUTO_INCREMENT,
  nameStatus varchar(255) DEFAULT NULL,
  PRIMARY KEY (idReservationStatus),
  UNIQUE KEY nameStatus (nameStatus)
) ;

CREATE TABLE rooms (
  idRoom int NOT NULL,
  pricePerNightRoom int DEFAULT NULL,
  floorRoom int DEFAULT NULL,
  avaibleRoom tinyint(1) DEFAULT NULL,
  capacityRoom int DEFAULT NULL,
  descriptionRoom text,
  idRoomType int DEFAULT NULL,
  idRoomStatus int DEFAULT NULL,
  PRIMARY KEY (idRoom),
  KEY idRoomType (idRoomType),
  KEY idRoomStatus (idRoomStatus),
  CONSTRAINT rooms_ibfk_1 FOREIGN KEY (idRoomType) REFERENCES roomtypes (idRoomType) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT rooms_ibfk_2 FOREIGN KEY (idRoomStatus) REFERENCES roomstatuses (idRoomStatus) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE roomstatuses (
  idRoomStatus int NOT NULL AUTO_INCREMENT,
  nameStatusRoom varchar(60) DEFAULT NULL,
  PRIMARY KEY (idRoomStatus),
  UNIQUE KEY nameStatusRoom (nameStatusRoom)
) ;

CREATE TABLE roomtypes (
  idRoomType int NOT NULL AUTO_INCREMENT,
  nameRoomType varchar(20) DEFAULT NULL,
  PRIMARY KEY (idRoomType),
  UNIQUE KEY nameRoomType (nameRoomType)
) ;

CREATE TABLE services (
  idService int NOT NULL AUTO_INCREMENT,
  nameService varchar(255) DEFAULT NULL,
  descriptionService varchar(255) DEFAULT NULL,
  precioService decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (idService),
  UNIQUE KEY nameService (nameService)
);

CREATE TABLE userhotels (
  idUser int NOT NULL,
  nameUser varchar(100) DEFAULT NULL,
  groupUser int DEFAULT NULL,
  addressUser varchar(40) DEFAULT NULL,
  emailUser varchar(255) DEFAULT NULL,
  passwordUser varchar(255) DEFAULT NULL,
  activeUser tinyint(1) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  idUserRol int DEFAULT NULL,
  PRIMARY KEY (idUser),
  UNIQUE KEY emailUser (emailUser),
  KEY idUserRol (idUserRol),
  CONSTRAINT userhotels_ibfk_1 FOREIGN KEY (idUserRol) REFERENCES userrols (idUserRol) ON DELETE SET NULL ON UPDATE CASCADE
) ;

CREATE TABLE userrols (
  idUserRol int NOT NULL AUTO_INCREMENT,
  nameRol varchar(255) DEFAULT NULL,
  PRIMARY KEY (idUserRol),
  UNIQUE KEY nameRol (nameRol)
) ;
