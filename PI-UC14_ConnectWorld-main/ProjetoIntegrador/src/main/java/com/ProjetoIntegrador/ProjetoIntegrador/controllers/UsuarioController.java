package com.ProjetoIntegrador.ProjetoIntegrador.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ProjetoIntegrador.ProjetoIntegrador.models.Usuario;
import com.ProjetoIntegrador.ProjetoIntegrador.repository.UsuarioRepository;

@Controller
public class UsuarioController {

	@Autowired
	private UsuarioRepository ur;
	
	//PÁGINA INDEX
	@RequestMapping("/")
	public ModelAndView index() {
		ModelAndView mv = new ModelAndView("usuario/index"); 
		return mv;
	}
	//PÁGINA AREAVENDEDOR
	@RequestMapping("/areaVendedor")
	public ModelAndView areaVendedor() {
		ModelAndView mv = new ModelAndView("usuario/areaVendedor"); 
		return mv;
	}
	//PÁGINA ENTRAR
	@RequestMapping("/entrar")
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView("usuario/entrar"); 
		return mv;
	}

	//PÁGINA DE CADASTRO DE USUÁRIO
	@RequestMapping(value = "/cadastrarUsuario", method = RequestMethod.GET)
	public String form() {

		return "usuario/cadastroCliente";
	}

	@RequestMapping(value = "/cadastrarUsuario", method = RequestMethod.POST)
	public String form(@Valid Usuario usuario, BindingResult result, RedirectAttributes attributes) {

		if (result.hasErrors()) {
			attributes.addFlashAttribute("mensagem", "Verifique os campos!");
			return "redirect:/cadastrarUsuario";
		}

		ur.save(usuario);
		attributes.addFlashAttribute("mensagem", "Usuário Cadastrado com Sucesso!");
		return "redirect:/cadastrarUsuario";
	}

	// LISTAR USUARIOS
	@RequestMapping("/usuarios")
	public ModelAndView listaUsuarios() {
		ModelAndView mv = new ModelAndView("usuario/listaUsuario");
		Iterable<Usuario> usuarios = ur.findAll();
		mv.addObject("usuarios", usuarios); 
		return mv;
	}

	//
	@RequestMapping(value = "/{codigo}", method = RequestMethod.GET)
	public ModelAndView detalhesUsuario(@PathVariable("codigo") long codigo) {
		Usuario usuario = ur.findById(codigo);
		ModelAndView mv = new ModelAndView("usuario/detalhesUsuario");
		mv.addObject("usuario", usuario);

		return mv;
	}

	// DELETAR USUARIO
	@RequestMapping("/deletarUsuario")
	public String deletarUsuario(long codigo) { 
		Usuario usuario = ur.findById(codigo);
		ur.delete(usuario);
		return "redirect:/usuarios";
	}

	public String detalhesUsuarioPost(@PathVariable("codigo") long codigo, BindingResult result,
			RedirectAttributes attributes) {
		if(result.hasErrors()) {
			attributes.addFlashAttribute("menssagem", "Verifique os campos");
		}
		return "redirect:/{codigo}";
	}
	
	//ATUALIZAR USUARIO
	//FORMULÁRIO DE EDIÇÃO DE USUÁRIO
	@RequestMapping(value="/editar-usuario", method = RequestMethod.GET)
	public ModelAndView editarUsuario(long codigo) {
		Usuario usuario = ur.findById(codigo);
		ModelAndView mv = new ModelAndView("usuario/update-usuario");
		mv.addObject("usuario", usuario);
		return mv;
	}
	
	//UPDATE USUARIO
	@RequestMapping(value = "/editar-usuario", method = RequestMethod.POST)
	public String updateUsuario(@Valid Usuario usuario, BindingResult result, RedirectAttributes attributes) {
		ur.save(usuario);
		attributes.addFlashAttribute("success", "Usuario alterado com sucesso");
		
		/*long codigoLong = usuario.getCodigo();
		String codigo = "" +codigoLong;
		return "redirect:/" + codigo;*/
		return "redirect:/usuarios";
	}

}



















