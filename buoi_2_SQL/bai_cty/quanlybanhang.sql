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
INSERT INTO `dondathang` VALUES ('1', '2006-04-02', '2007-02-02', '0000-00-00', 'huế', '1', 'A001');
INSERT INTO `dondathang` VALUES ('3', '2006-04-02', '2007-02-02', '2007-02-02', 'sài gòn', '2', 'H003');
INSERT INTO `dondathang` VALUES ('4', '2006-04-02', '2007-02-02', '0000-00-00', 'đà nẵng', '3', 'H002');
INSERT INTO `dondathang` VALUES ('5', '2006-04-02', '2007-02-02', '2007-02-02', 'huế', '5', 'D001');
INSERT INTO `dondathang` VALUES ('6', '2006-04-02', '2007-02-02', '0000-00-00', 'quảng nam', '6', 'T001');
INSERT INTO `dondathang` VALUES ('7', '2006-04-02', '2007-02-02', '2007-02-02', 'đà nẵng', '4', 'M001');
INSERT INTO `dondathang` VALUES ('8', '2006-04-02', '2007-02-02', '2007-02-02', 'đà nẵng', '6', 'P001');
INSERT INTO `dondathang` VALUES ('9', '2006-04-02', '2007-02-02', '2007-02-02', 'hà nội', '3', 'H003');

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
INSERT INTO `khachhang` VALUES ('1', 'Công ty sữa Việt Nam', 'VINAMILK', 'Hà Nội', 'vinamilk@vietnam.com', '04-891135', '');
INSERT INTO `khachhang` VALUES ('2', 'Công ty may mặc Việt Tiến', 'VIETTIEN', 'Sài Gòn', 'viettien@vietnam.com', '08-808803', '');
INSERT INTO `khachhang` VALUES ('3', 'Tổng công ty thực phẩm dinh dưỡng NUTRIFOOD', 'NUTRIFOOD', 'Sài Gòn', 'nutrifood@vietnam.com', '08-809890', '');
INSERT INTO `khachhang` VALUES ('4', 'Công ty điện máy Hà Nội', 'MACHANOI', 'Hà Nội', 'machanoi@vietnam.om', '04-898399', '');
INSERT INTO `khachhang` VALUES ('5', 'Hãng hàng không Việt Nam', 'VIETNAMAIRLINES', 'Sài Gòn', 'vietnamairlines@vietnam.com', '08-888888', '');
INSERT INTO `khachhang` VALUES ('6', 'Công ty dụng cụ học sinh MIC', 'MIC', 'Hà Nội', 'mic@vietnam.com', '04-804408', '');

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
INSERT INTO `loaihang` VALUES ('DC', 'Dụng cụ học tập');
INSERT INTO `loaihang` VALUES ('DT', 'Ðiện tử');
INSERT INTO `loaihang` VALUES ('MM', 'May mặc');
INSERT INTO `loaihang` VALUES ('NT', 'Nội thất');
INSERT INTO `loaihang` VALUES ('TP', 'Thực phẩm');

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
INSERT INTO `mathang` VALUES ('NT01', 'Bàn ghế ăn', '20', 'NT', 'DAF', '1000000');
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
INSERT INTO `nhacungcap` VALUES ('DAF', 'Nội thất Đài Loan Dafuco', 'DAFUCO', 'Quy Nhơn', '056-888111', '', 'dafuco@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('DQV', 'Công ty máy tính Quang Vũ', 'QUANGVU', 'Quy Nhơn', '056-888777', '', 'quangvu@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('GOL', 'Công ty sản xuất dụng cụ học sinh Golden', 'GOLDEN', 'Quy Nhơn', '056-891135', '', 'golden@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('MVT', 'Công ty may mặc Việt Tiến', 'VIETTIEN', 'Sài Gòn', '08-808803', '', 'viettien@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('SCM', 'Siêu thị Coop-mart', 'COOPMART', 'Quy Nhơn', '056-888666', '', 'coopmart@vietnam.com');
INSERT INTO `nhacungcap` VALUES ('VNM', 'Công ty sữa Việt Nam', 'VINAMILK', 'Hà Nội', '04-891135', '', 'vinamilk@vietnam.com');

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
INSERT INTO `nhanvien` VALUES ('A001', 'Đậu Tố', 'Anh', '1987-10-02', '2015-05-05', 'Quy Nhơn', '056-647995', '10000000', '1000000');
INSERT INTO `nhanvien` VALUES ('D001', 'Nguyễn Minh', 'Đăng', '1987-10-02', '2015-05-05', 'Quy Nhơn', '0905-779919', '14000000', '0');
INSERT INTO `nhanvien` VALUES ('H001', 'Lê Thị Bích', 'Hoa', '1987-10-02', '2015-05-05', 'An Khê', '', '9000000', '1000000');
INSERT INTO `nhanvien` VALUES ('H002', 'Ông Hoàng', 'Hải', '1987-10-02', '2015-05-05', 'Đà Nẵng', '0905-611725', '12000000', '0');
INSERT INTO `nhanvien` VALUES ('H003', 'Trần Nguyễn Đức', 'Hoàng', '1986-10-05', '2015-05-05', 'Quy Nhơn', '', '11000000', '0');
INSERT INTO `nhanvien` VALUES ('M001', 'Hồ Thị Phương', 'Mai', '1986-11-02', '2015-05-05', 'Tây Sơn', '', '9000000', '500000');
INSERT INTO `nhanvien` VALUES ('P001', 'Nguyễn Hoài', 'Phong', '1986-11-02', '2015-05-05', 'Quy Nhơn', '056-891135', '13000000', '0');
INSERT INTO `nhanvien` VALUES ('Q001', 'Trương Thị Thế', 'Quang', '1990-07-02', '2015-05-05', 'Ayunpa', '0979-792176', '10000000', '500000');
INSERT INTO `nhanvien` VALUES ('T001', 'Nguyễn Đức', 'Thắng', '1989-01-02', '2015-05-05', 'Phù Mỹ', '0955-593893', '1200000', '0');
