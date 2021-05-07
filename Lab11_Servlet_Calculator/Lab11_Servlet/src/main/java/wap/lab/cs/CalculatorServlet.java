package wap.lab.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calculator")

public class CalculatorServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String addfirstNumber = req.getParameter("addFirstNum");
        String addSecondNumber = req.getParameter("addSecondNum");

        String multSecondNum = req.getParameter("multSecondNum");
        String multFirstNum = req.getParameter("multFirstNum");

        resp.setContentType("text/html;charset=UTF-8");

        int addRes;
        int multRes;
        try (PrintWriter out = resp.getWriter()) {
            if (addfirstNumber != " " && addSecondNumber != " ") {
                int num1 = Integer.valueOf(addfirstNumber);
                int num2 = Integer.valueOf(addSecondNumber);
                addRes = num1 + num2;

                out.println("<div><label> Addition of </label> " + num1 + " and " + num2 + "=" + addRes + "</div>");
            }
            if (multFirstNum != " " && multSecondNum != " ") {
                int num3 = Integer.valueOf(multFirstNum);
                int num4 = Integer.valueOf(multSecondNum);
                multRes = num3 * num4;
                out.println("<div><label> Addition of </label> " + num3 + " and " + num4 + "=" + multRes + "</div>");

            }
//            resp.sendRedirect("/result.html");
        } catch (Exception e) {
            resp.sendError(500);
        }
    }
}