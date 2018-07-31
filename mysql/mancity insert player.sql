DROP TABLE mancity.player;



CREATE TABLE mancity.player (
  `idplayer` int(11) NOT NULL AUTO_INCREMENT,
  `lastName` varchar(45) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `homeCountry` varchar(45) NOT NULL,
  `number` int(11) DEFAULT NULL,
  PRIMARY KEY (`idplayer`),
  UNIQUE KEY `lastName_UNIQUE` (`lastName`),
  UNIQUE KEY `firstName_UNIQUE` (`firstName`)
  /*FOREIGN KEY (number) REFERENCES mancity.stats(number)*/
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

INSERT INTO mancity.player VALUES ('1','Hart','Joe','England','1');
INSERT INTO mancity.player VALUES ('2','Pantilimon','Costel','Romania','30');
INSERT INTO mancity.player VALUES ('3', 'Clichy' , 'Gael' , 'France' , '22');
INSERT INTO mancity.player VALUES ('4', 'Demichelis' , 'Martin' , 'Argentina' , '26');
INSERT INTO mancity.player VALUES ('5', 'Kompany' , 'Vincent' , 'Belgium' , '4');
INSERT INTO mancity.player VALUES ('6', 'Kolarov' , 'Aleksandar' , 'Serbia' , '13');
INSERT INTO mancity.player VALUES ('7', 'Zabaleta' , 'Pablo' , 'Argentina' , '5');
INSERT INTO mancity.player VALUES ('8', 'Milner' , 'James' , 'England' , '7');
INSERT INTO mancity.player VALUES ('9', 'Silva' , 'David' , 'Spain' , '21');
INSERT INTO mancity.player VALUES ('10', 'Toure' , 'Yaya' , 'Ivory Coaststatsplayer' , '42');
INSERT INTO mancity.player VALUES ('11', 'Navas' , 'Jesus' , 'Spain' , '15');
INSERT INTO mancity.player VALUES ('12', ' ' , 'Fernandinho' , 'Brazil' , '25');
INSERT INTO mancity.player VALUES ('13', 'Aguero' , 'Sergio' , 'Argentina' , '16');
INSERT INTO mancity.player VALUES ('14', 'Dzeko' , 'Edin' , 'Croatia' , '10');
INSERT INTO mancity.player VALUES ('15', 'Jovetic' , 'Steven' , 'Montenegro' , '35');


SELECT * FROM mancity.player
WHERE player.lastName = "Toure";

SELECT player.lastName, homeCountry FROM mancity.player;












