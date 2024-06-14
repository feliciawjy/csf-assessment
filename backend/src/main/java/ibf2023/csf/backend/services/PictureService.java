package ibf2023.csf.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ibf2023.csf.backend.models.Image;
import ibf2023.csf.backend.repositories.ImageRepository;
import ibf2023.csf.backend.repositories.PictureRepository;

@Service
public class PictureService {

	@Autowired
	ImageRepository imageRepo;

	@Autowired
	PictureRepository pictureRepo;

	@Autowired
	MongoTemplate mongoTemplate;

	// TODO Task 5.1
	// You may change the method signature by adding parameters and/or the return
	// type
	// You may throw any exception

	/*
	 * db.travelpics.aggregate([
	 * {
	 * $match: {
	 * date: {
	 * $gte: new ISODate("2024-06-01T00:00:00Z"),
	 * $lt: new ISODate("2024-07-01T00:00:00Z")
	 * }
	 * }
	 * },
	 * {
	 * $group: {
	 * _id: null,
	 * totalSize: { $sum: "$size" }
	 * }
	 * }
	 * ])
	 */
	public void save(Image image, MultipartFile file) {

		// get current image size
	}
}
