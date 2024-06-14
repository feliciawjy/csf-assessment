package ibf2023.csf.backend.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PictureRepository {

	@Autowired
	MongoTemplate mongoTemplate;

	// TODO Task 4.2
	// You may change the method signature by adding parameters and/or the return
	// type
	// You may throw any exception

	// db.travelpics.insert({
	// date: Timestamp(1718338017,1),
	// title: "hat",
	// comments: "image of a hat",
	// url: "https://fel.sgp1.cdn.digitaloceanspaces.com/924660a8",
	// size: 5.21
	// });
	public void save() {
		
	}

}
