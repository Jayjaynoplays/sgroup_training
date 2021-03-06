SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `chitietdathang`
-- ----------------------------
DROP TABLE IF EXISTS `chitietdathang`;
CREATE TABLE `chitietdathang` (
  `ID` int(11) NOT NULL,
  `SOLUONG` int(11) DEFAULT NULL,
  `MUCGIAMGIA` float DEFAULT NULL,
  `DONDATHANG_SOHOADON` int(11) NOT NULL,
  `MATHANG_MAHANG` char(4) NOT NULL,
  `GIABAN` float DEFAULT NULL,
  PRIMARY KEY (`ID`,`DONDATHANG_SOHOADON`,`MATHANG_MAHANG`),
  KEY `fk_CHITIETDATHANG_DONDATHANG1_idx` (`DONDATHANG_SOHOADON`),
  KEY `fk_CHITIETDATHANG_MATHANG1_idx` (`MATHANG_MAHANG`),
  CONSTRAINT `fk_CHITIETDATHANG_DONDATHANG1` FOREIGN KEY (`DONDATHANG_SOHOADON`) REFERENCES `dondathang` (`SOHOADON`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_CHITIETDATHANG_MATHANG1` FOREIGN KEY (`MATHANG_MAHANG`) REFERENCES `mathang` (`MAHANG`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chitietdathang
-- ----------------------------
INSERT INTO `chitietdathang` VALUES ('1', '1000', '0', '9', 'DC01', '248000');
INSERT INTO `chitietdathang` VALUES ('2', '1000', '0', '9', 'DC02', '2000');
INSERT INTO `chitietdathang` VALUES ('3', '1000', '0', '9', 'DC03', '7500');
INSERT INTO `chitietdathang` VALUES ('4', '2', '1000000', '8', 'DT04', '20000000');
INSERT INTO `chitietdathang` VALUES ('5', '200', '0', '7', 'TP03', '3000');
INSERT INTO `chitietdathang` VALUES ('6', '3000', '1000000', '4', 'MM01', '18000000');
INSERT INTO `chitietdathang` VALUES ('7', '5', '0', '1', 'TP01', '4000');
INSERT INTO `chitietdathang` VALUES ('8', '30', '10000', '3', 'MM01', '340000');
INSERT INTO `chitietdathang` VALUES ('9', '30', '20000', '3', 'MM02', '500000');

-- ----------------------------
-- Table structure for `dondathang`
-- ----------------------------
DROP TABLE IF EXISTS `dondathang`;
CREATE TABLE `dondathang` (
  `SOHOADON` int(11) NOT NULL,
  `NGAYDATHANG` date DEFAULT NULL,
  `NGAYGIAOHANG` date DEFAULT NULL,
  `NGAYCHUYENHANG` date DEFAULT NULL,
  `NOIGIAOHANG` varchar(45) DEFAULT NULL,
  `KHACHHANG_MAKHACHHANG` int(11) NOT NULL,
  `NHANVIEN_MANHANVIEN` char(4) NOT NULL,
  PRIMARY KEY (`SOHOADON`),
  KEY `fk_DONDATHANG_KHACHHANG_idx` (`KHACHHANG_MAKHACHHANG`),
  KEY `fk_DONDATHANG_NHANVIEN1_idx` (`NHANVIEN_MANHANVIEN`),
  CONSTRAINT `fk_DONDATHANG_KHACHHANG` FOREIGN KEY (`KHACHHANG_MAKHACHHANG`) REFERENCES `khachhang` (`MAKHACHHANG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_DONDATHANG_NHANVIEN1` FOREIGN KEY (`NHANVIEN_MANHANVIEN`) REFERENCES `nhanvien` (`MANHANVIEN`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dondathang
-- ----------------------------
INSERT INTO `dondathang` VALUES ('1', '2006-04-02', '2007-02-02', '0000-00-00', 'hu???', '1', 'A001');
INSERT INTO `dondathang` VALUES ('3', '2006-04-02', '2007-02-02', '2007-02-02', 's??i g??n', '2', 'H003');
INSERT INTO `dondathang` VALUES ('4', '2006-04-02', '2007-02-02', '0000-00-00', '???? n???ng', '3', 'H002');
INSERT INTO `dondathang` VALUES ('5', '2006-04-02', '2007-02-02', '2007-02-02', 'hu???', '5', 'D001');
INSERT INTO `dondathang` VALUES ('6', '2006-04-02', '2007-02-02', '0000-00-00', 'qu???ng nam', '6', 'T001');
INSERT INTO `dondathang` VALUES ('7', '2006-04-02', '2007-02-02', '2007-02-02', '???? n???ng', '4', 'M001');
INSERT INTO `dondathang` VALUES ('8', '2006-04-02', '2007-02-02', '2007-02-02', '???? n???ng', '6', 'P001');
INSERT INTO `dondathang` VALUES ('9', '2006-04-02', '2007-02-02', '2007-02-02', 'h?? n???i', '3', 'H003');

-- ----------------------------
-- Table structure for `khachhang`
-- ----------------------------
DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE `khachhang` (
  `MAKHACHHANG` int(11) NOT NULL,
  `TENCONGTY` varchar(255) DEFAULT NULL,
  `TENGIAODICH` varchar(255) DEFAULT NULL,
  `DIACHI` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `DIENTHOAI` varchar(45) DEFAULT NULL,
  `FAX` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MAKHACHHANG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of khachhang
-- ----------------------------
INSERT INTO `khachhang` VALUES ('1', 'C??ng ty s???a Vi???t Nam', 'VINAMILK', 'H?? N???i', 'vinamilk@vietnam.com', '04-891135', '');
INSERT INTO `khachhang` VALUES ('2', 'C??ng ty may m???c Vi???t Ti???n', 'VIETTIEN', 'S??i G??n', 'viettien@vietnam.com', '08-808803', '');
INSERT INTO `khachhang` VALUES ('3', 'T???ng c??ng ty th???c ph???m dinh d?????ng NUTRIFOOD', 'NUTRIFOOD', 'S??i G??n', 'nutrifood@vietnam.com', '08-809890', '');
INSERT INTO `khachhang` VALUES ('4', 'C??ng ty ??i???n m??y H?? N???i', 'MACHANOI', 'H?? N???i', 'machanoi@vietnam.om', '04-898399', '');
INSERT INTO `khachhang` VALUES ('5', 'H??ng h??ng kh??ng Vi???t Nam', 'VIETNAMAIRLINES', 'S??i G??n', 'vietnamairlines@vietnam.com', '08-888888', '');
INSERT INTO `khachhang` VALUES ('6', 'C??ng ty d???ng c??? h???c sinh MIC', 'MIC', 'H?? N???i', 'mic@vietnam.com', '04-804408', '');

-- ----------------------------
-- Table structure for `loaihang`
-- ----------------------------
DROP TABLE IF EXISTS `loaihang`;
CREATE TABLE `loaihang` (
  `MALOAIHANG` char(4) NOT NULL,
  `TENLOAIHANG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MALOAIHANG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loaihang
-- ----------------------------
INSERT INTO `loaihang` VALUES ('DC', 'D???ng c??? h???c t???p');
INSERT INTO `loaihang` VALUES ('DT', '??i???n t???');
INSERT INTO `loaihang` VALUES ('MM', 'May m???c');
INSERT INTO `loaihang` VALUES ('NT', 'N???i th???t');
INSERT INTO `loaihang` VALUES ('TP', 'Th???c ph???m');

-- ----------------------------
-- Table structure for `mathang`
-- ----------------------------
DROP TABLE IF EXISTS `mathang`;
CREATE TABLE `mathang` (
  `MAHANG` char(4) NOT NULL,
  `TENHANG` varchar(255) DEFAULT NULL,
  `SOLUONG` int(11) DEFAULT NULL,
  `LOAIHANG_MALOAIHANG` char(4) NOT NULL,
  `NHACUNGCAP_MACONGTY` char(4) NOT NULL,
  `GIAHANG` float DEFAULT NULL,
  PRIMARY KEY (`MAHANG`,`LOAIHANG_MALOAIHANG`,`NHACUNGCAP_MACONGTY`),
  KEY `fk_MATHANG_LOAIHANG1_idx` (`LOAIHANG_MALOAIHANG`),
  KEY `fk_MATHANG_NHACUNGCAP1_idx` (`NHACUNGCAP_MACONGTY`),
  CONSTRAINT `fk_MATHANG_LOAIHANG1` FOREIGN KEY (`LOAIHANG_MALOAIHANG`) REFERENCES `loaihang` (`MALOAIHANG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_MATHANG_NHACUNGCAP1` FOREIGN KEY (`NHACUNGCAP_MACONGTY`) REFERENCES `nhacungcap` (`MACONGTY`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mathang
-- ----------------------------
INSERT INTO `mathang` VALUES ('DC01', 'VO HOC SINH CAO CAP', '20', 'DC', 'GOL', '48000');
INSERT INTO `mathang` VALUES ('DC02', 'HOP MAU VE', '20', 'DC', 'GOL', '2000');
INSERT INTO `mathang` VALUES ('DC03', 'VIET BI HOC SINH ', '20', 'DC', 'GOL', '7500');
INSERT INTO `mathang` VALUES ('DC04', 'VIET CHI 2B', '2000', 'DC', 'GOL', '3000');
INSERT INTO `mathang` VALUES ('DC05', 'VIET MUC CAO CAP', '200', 'DC', 'GOL', '2000');
INSERT INTO `mathang` VALUES ('DC06', 'VIET CHI 4B ', '2000', 'DC', 'GOL', '6000');
INSERT INTO `mathang` VALUES ('DT01', 'LCD NEC', '10', 'DT', 'DQV', '3100000');
INSERT INTO `mathang` VALUES ('DT02', 'O CUNG 80GB', '10', 'DT', 'DQV', '800000');
INSERT INTO `mathang` VALUES ('DT03', 'BAN PHIM MITSUMI', '20', 'DT', 'DQV', '150000');
INSERT INTO `mathang` VALUES ('DT04', 'TV LCD', '10', 'DT', 'DQV', '20000000');
INSERT INTO `mathang` VALUES ('DT05', 'LAPTOP NEC', '60', 'DT', 'DQV', '18000000');
INSERT INTO `mathang` VALUES ('MM01', 'DONG PHUC NU', '240', 'MM', 'MVT', '340000');
INSERT INTO `mathang` VALUES ('MM02', 'VESTON NAM', '30', 'MM', 'MVT', '500000');
INSERT INTO `mathang` VALUES ('MM03', 'AO SO MI NAM', '20', 'MM', 'MVT', '75000');
INSERT INTO `mathang` VALUES ('NT01', 'B??n gh??? ??n', '20', 'NT', 'DAF', '1000000');
INSERT INTO `mathang` VALUES ('NT02', 'BAN GHE SALON', '20', 'NT', 'DAF', '150000');
INSERT INTO `mathang` VALUES ('TP01', 'SUA HOP', '10', 'TP', 'VNM', '4000');
INSERT INTO `mathang` VALUES ('TP02', 'SUA XO', '12', 'TP', 'VNM', '180000');
INSERT INTO `mathang` VALUES ('TP03', 'SUA KHONG DUONG', '5000', 'TP', 'VNM', '3500');
INSERT INTO `mathang` VALUES ('TP04', 'TAO', '15', 'TP', 'SCM', '12000');
INSERT INTO `mathang` VALUES ('TP05', 'CA CHUA ', '15', 'TP', 'SCM', '5000');
INSERT INTO `mathang` VALUES ('TP06', 'BANH AFC', '100', 'TP', 'SCM', '3000');
INSERT INTO `mathang` VALUES ('TP07', 'MI TOM A-ONE', '100', 'TP', 'SCM', '40000');

-- ----------------------------
-- Table structure for `nhacungcap`
-- ----------------------------
DROP TABLE IF EXISTS `nhacungcap`;
CREATE TABLE `nhacungcap` (
  `MACONGTY` char(4) NOT NULL,
  `TENCONGTY` varchar(255) DEFAULT NULL,
  `TENGIAODICH` varchar(255) DEFAULT NULL,
  `DIACHI` varchar(45) DEFAULT NULL,
  `DIENTHOAI` varchar(45) DEFAULT NULL,
  `FAX` varchar(45) DEFAULT NULL,
  `email` tinytext,
  PRIMARY KEY (`MACONGTY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nhacungcap
-- ----------------------------
INSERT INTO `nhacungcap` VALUES ('DAF', 'N???i th???t ????i Loan Dafuco', 'DAFUCO', 'Quy Nh??n', '056-888111', '', 'dafuco@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('DQV', 'C??ng ty m??y t??nh Quang V??', 'QUANGVU', 'Quy Nh??n', '056-888777', '', 'quangvu@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('GOL', 'C??ng ty s???n xu???t d???ng c??? h???c sinh Golden', 'GOLDEN', 'Quy Nh??n', '056-891135', '', 'golden@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('MVT', 'C??ng ty may m???c Vi???t Ti???n', 'VIETTIEN', 'S??i G??n', '08-808803', '', 'viettien@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('SCM', 'Si??u th??? Coop-mart', 'COOPMART', 'Quy Nh??n', '056-888666', '', 'coopmart@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('VNM', 'C??ng ty s???a Vi???t Nam', 'VINAMILK', 'H?? N???i', '04-891135', '', 'vinamilk@vietnam.com');

-- ----------------------------
-- Table structure for `nhanvien`
-- ----------------------------
DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE `nhanvien` (
  `MANHANVIEN` char(4) NOT NULL,
  `HO` varchar(45) DEFAULT NULL,
  `TEN` varchar(45) DEFAULT NULL,
  `NGAYSINH` date DEFAULT NULL,
  `NGAYLAMVIEC` date DEFAULT NULL,
  `DIACHI` varchar(45) DEFAULT NULL,
  `DIENTHOAI` varchar(45) DEFAULT NULL,
  `LUONGCOBAN` float DEFAULT NULL,
  `LUONGPHUCAP` float DEFAULT NULL,
  PRIMARY KEY (`MANHANVIEN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nhanvien
-- ----------------------------
INSERT INTO `nhanvien` VALUES ('A001', '?????u T???', 'Anh', '1987-10-02', '2015-05-05', 'Quy Nh??n', '056-647995', '10000000', '1000000');
INSERT INTO `nhanvien` VALUES ('D001', 'Nguy???n Minh', '????ng', '1987-10-02', '2015-05-05', 'Quy Nh??n', '0905-779919', '14000000', '0');
INSERT INTO `nhanvien` VALUES ('H001', 'L?? Th??? B??ch', 'Hoa', '1987-10-02', '2015-05-05', 'An Kh??', '', '9000000', '1000000');
INSERT INTO `nhanvien` VALUES ('H002', '??ng Ho??ng', 'H???i', '1987-10-02', '2015-05-05', '???? N???ng', '0905-611725', '12000000', '0');
INSERT INTO `nhanvien` VALUES ('H003', 'Tr???n Nguy???n ?????c', 'Ho??ng', '1986-10-05', '2015-05-05', 'Quy Nh??n', '', '11000000', '0');
INSERT INTO `nhanvien` VALUES ('M001', 'H??? Th??? Ph????ng', 'Mai', '1986-11-02', '2015-05-05', 'T??y S??n', '', '9000000', '500000');
INSERT INTO `nhanvien` VALUES ('P001', 'Nguy???n Ho??i', 'Phong', '1986-11-02', '2015-05-05', 'Quy Nh??n', '056-891135', '13000000', '0');
INSERT INTO `nhanvien` VALUES ('Q001', 'Tr????ng Th??? Th???', 'Quang', '1990-07-02', '2015-05-05', 'Ayunpa', '0979-792176', '10000000', '500000');
INSERT INTO `nhanvien` VALUES ('T001', 'Nguy???n ?????c', 'Th???ng', '1989-01-02', '2015-05-05', 'Ph?? M???', '0955-593893', '1200000', '0');
