package wap.miu.edu.customTag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        // replaced the Date class with the new LocalDate class from Java 8
        // Date dNow = new Date();
        SimpleDateFormat sdfOut = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz", Locale.US);

        String text = "Current Date: " + sdfOut.format(new Date());
        if (color != null) {
            // <span style="color: red; font-size: 12px;">Mon 2016.04.04 at 04:14:09 PM PDT</span>
            out.write("<span style='color: " + color + "; size: " + size + "'>" + text + "</span>");
        } else {
            out.write(String.format("<span>%s</span>", text));
        }
    }

//    public String getColor() {
//        return color;
//    }

    public void setColor(String color) {
        this.color = color;
    }

//    public String getSize() {
//        return size;
//    }

    public void setSize(String size) {
        this.size = size;
    }
}
