<script setup>
 import DropdownMenu from '@/components/Ui-Kit/dropdown-Menu.vue'
 import LogoSvg from "@/assets/media_content/Logo.svg"
 import NavArrowSvg from "@/assets/media_content/Down.svg"
 import LoginSvg from "@/assets/media_content/login.svg"
 import BurgerMenuSvg from "@/assets/media_content/Menu.svg";
</script>

<template>
  <header>
    <div class="logo">
      <LogoSvg class="logo-svg" />
      <span>Exclusive supplier of Aeromarine SRT products</span>
    </div>

    <nav class="nav">
      <div>
        <DropdownMenu class="dropdown-menu">
          <template #trigger>
						<button>
							<NavArrowSvg />
							<span>Product</span>
						</button>
          </template>
          <template #body>
            <button>ELT Tester 406 03</button>
            <button>ELT Tester i406 Mini </button>
          </template>
        </DropdownMenu>
        <DropdownMenu class="dropdown-menu">
          <template #trigger>
						<button>
							<NavArrowSvg />
							<span>For current users</span>
						</button>
          </template>
          <template #body></template>
        </DropdownMenu>
        <button>
          <span>Contact us</span>
        </button>
      </div>
    </nav>

    <button class="login-button">
      <LoginSvg />
      <span>Login</span>
    </button>

    <button class="burger-button">
      <BurgerMenuSvg />
      <span>Menu</span>
    </button>

    <div class="burger-menu">
      <nav class="burger-nav">
        <ul>
          <li>
            <button>
              <span>Product</span>
            </button>
          </li>
          <li>
            <button>
              <span>For current users</span>
            </button>
          </li>
          <li>
            <button>
              <span>Contact us</span>
            </button>
          </li>
        </ul>
      </nav>
      <button class="login-button">
        <img src="@/assets/media_content/login.svg" alt="login img"/>
        <span>Login</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
  @import 'header-style.scss';
</style>
