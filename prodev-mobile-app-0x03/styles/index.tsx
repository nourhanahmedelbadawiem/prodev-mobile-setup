import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  backButton: {
    padding: 8,
  },
  logo: {
    width: 56,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111827',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
  },
  passwordIconButton: {
    paddingLeft: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: '#059669',
  },
  signInButton: {
    marginTop: 24,
    backgroundColor: '#047857',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#9ca3af',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'center',
  },
  socialIconContainer: {
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
  footerLink: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '600',
  },
});

export default styles;

