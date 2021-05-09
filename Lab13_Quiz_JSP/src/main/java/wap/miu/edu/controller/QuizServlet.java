package wap.miu.edu.controller;

import wap.miu.edu.model.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "Lab13_Quiz_JSP", urlPatterns = {"/index"})
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
        if(quiz.isEndOfQuestion())
            req.getRequestDispatcher("success.jsp").forward(req, resp);
        else
            req.getRequestDispatcher("index.jsp").forward(req, resp);
    }
}
