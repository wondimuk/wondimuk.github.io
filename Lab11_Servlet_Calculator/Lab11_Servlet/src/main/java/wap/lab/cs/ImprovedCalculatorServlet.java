package wap.lab.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/modifiedCalculator")
public class ImprovedCalculatorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter out = resp.getWriter();

        try {
            String firstAddNumber= req.getParameter("frstNum");
            String secondAddNumber = req.getParameter("sndNum");
            String firstMultNumber = req.getParameter("trdNum");
            String secondMultNumber = req.getParameter("fthNum");

            int addRes;
            int multRes;

            resp.setContentType("text/html;charset=UTF-8");
            out.println();
            out.println("<head><link href=\"style.css\" rel=\"stylesheet\" media=\"screen>\"");
            out.println("<link href=\"actions.js\" rel=\"text/javascript\" media=\"screen\">");
            out.println("<title>WAP Modified Calculator </title></head>");
            if (firstAddNumber != " " && secondAddNumber != " ") {
                addRes = Integer.valueOf(firstAddNumber) + Integer.valueOf(secondAddNumber);
                out.println(" <div> <input name=\"num1\" value="+firstAddNumber+"> + <input name=\"num2\" value="+secondAddNumber+"> = <input name=\"sum\" value="+addRes+" readonly> </div>");
                out.println();
            }
            else{
                out.println("<input name=\"num1\"> + <input name=\"num2\"> = <input name=\"sum\" readonly>");
                out.println();
            }
            if (firstMultNumber != " " && secondMultNumber != " ") {
                multRes = Integer.valueOf(firstMultNumber) * Integer.valueOf(secondMultNumber);
                out.println("<div><input name=\"num3\" value="+firstMultNumber+"> * <input name=\"num4\" value="+secondMultNumber+"> = <input name=\"product\" value="+multRes+" readonly> </div>");
            }
            else{
                out.println("<input name=\"num3\"> * <input name=\"num4\"> = <input name=\"product\" readonly>");
            }
            out.print("<br/>");
            out.print(" <input type=\"submit\" value=\"Submit\" >");
            out.print("</form>");
        }catch (Exception e){
            out.print("Something is wrong...");
        }

    }
}
