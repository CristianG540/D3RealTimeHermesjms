<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style type="text/css">
	html{
	height: 100%;
	width: 100%
	}
	.errorblock{
		color: red;
	}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login Page</title>
</head>
<body>
<form:form method="post" commandName="message" action="/notification/post">
<table  style="width:100%;height:100% ; border-color: transparent;vertical-align: middle; text-align: center;" >
	<tr>
		<td><form:errors path="*" cssClass="errorblock" element="div"/></td>
	</tr>
	<tr>
		<td>Message &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" name="message" id="message"></td>
	</tr>
	
	<tr>
		<td>  <input type="submit"  value="Notify"> </td>
	</tr>
</table>
</form:form>
</body>
</html>