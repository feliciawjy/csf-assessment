package ibf2023.csf.backend.models;

import java.sql.Date;

public class Image {

    private String imageKey;
    private Date date;
    private String title;
    private String comments;
    private String url;
    private double size;

    public Image() {
    }

    public Image(String imageKey, Date date, String title, String comments, String url, double size) {
        this.imageKey = imageKey;
        this.date = date;
        this.title = title;
        this.comments = comments;
        this.url = url;
        this.size = size;
    }

    public String getImageKey() {
        return imageKey;
    }

    public void setImageKey(String imageKey) {
        this.imageKey = imageKey;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
    }

}
