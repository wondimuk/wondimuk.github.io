package wap.miu.edu.controller;
import wap.miu.edu.model.Quiz;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Lab12_Quiz_Servlet", urlPatterns = {"/index"})
public class QuizServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Quiz quiz;
        if(session.getAttribute("quiz")==null){
                quiz = new Quiz();
                session.setAttribute("quiz",quiz);
        }
        else{
            String ans=req.getParameter("answer");
            quiz = (Quiz) session.getAttribute("quiz");
            quiz.checkAnswer(ans);
            session.setAttribute("quiz",quiz);
        }
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        String quest = quiz.getNextQuestion();

        out.println("<h1>The Number Quiz</h1>");
        out.println("<p> Your Score is </p>" + quiz.getScore());

        if(quest == null){
            out.println("<p>You have completed the quize. Thank you!</p>");
        }
        else{
            out.println("Question is: <hr/>");
            out.println("<p>Guess the next number in the sequence.</p>");
            out.println("<p>" + quest + "</p>");
            out.println("<form action=\"index\" method=\"post\">\n" +
                    "    Your answer is:\n" +
                    "    <input type=\"number\" name=\"answer\"/>\n" +
                    "    <input type=\"submit\" value=\"Submit\"/>\n" +
                    "</form>");
        }

    }
}
