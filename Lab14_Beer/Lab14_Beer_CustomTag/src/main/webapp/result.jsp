<%@ page import="java.util.*" %>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>
<% List styles = (List) request.getAttribute("styles"); %>
<ul>
    <c:forEach var="beer" items="${styles}">
        <li>${beer}</li>
    </c:forEach>
</ul>

</body>
</html>