SELECT * FROM mancity.stats;


INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('1', '0', '0', '0', '1', '1', '2790', 'GK');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('2', '0', '0', '0', '1', '30', '630', 'GK');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('3', '0', '0', '0', '1', '22', '1660', 'D');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('4', '2', '1', '0', '6', '26', '2430', 'D');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('5', '4', '1', '1', '6', '4', '2365', 'D');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('6', '1', '7', '0', '2', '13', '1970', 'D');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('7', '1', '6', '0', '11', '5', '3079', 'D');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`, `position`) VALUES ('8', '1', '4', '0', '3', '7', '1358', 'M');
INSERT INTO `mancity`.`stats` (`idstats`, `goals`, `assists`, `redCard`, `yellowCard`, `number`, `minutes`) VALUES ('9', '7', '9', '0', '5', '21', '2173');




CREATE TABLE `stats` (
  `idstats` int(11) NOT NULL AUTO_INCREMENT,
  `goals` int(11) NOT NULL,
  `assists` int(11) NOT NULL,
  `redCard` int(11) NOT NULL,
  `yellowCard` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `minutes` int(11) DEFAULT NULL,
  `position` char(2) DEFAULT NULL,
  PRIMARY KEY (`idstats`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

DROP TABLE mancity.stats;

SELECT stats.redCard FROM mancity.stats;
