package ibf2023.csf.backend.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import ibf2023.csf.backend.repositories.ImageRepository;
import ibf2023.csf.backend.services.PictureService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

// You can add addtional methods and annotations to this controller. 
// You cannot remove any existing annotations or methods from UploadController
@Controller
@RequestMapping(path = "/api")
public class UploadController {

	@Autowired
	ImageRepository imageRepo;

	@Autowired
	PictureService pictureSvc;

	// TODO Task 5.2
	// You may change the method signature by adding additional parameters and
	// annotations.
	// You cannot remove any any existing annotations and parameters from
	// postUpload()
	@PostMapping(path = "/image/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> postUpload(
			@RequestPart MultipartFile picture,
			@RequestPart String title,
			@RequestPart String comment) {

		String id = "";

		try {
			id = imageRepo.save(picture);
		} catch (IOException e) {
			e.printStackTrace();
		}

		JsonObject payload = Json.createObjectBuilder()
				.add("imagekey", id)
				.build();

		return ResponseEntity.ok(
				Json.createObjectBuilder().build().toString());
	}
}
